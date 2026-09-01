#!/usr/bin/env bash
#
# convert-folder-to-webp.sh
#
# Recursively find image files under a directory and create .webp
# copies alongside them using ffmpeg (originals are left untouched).
#
# Usage:
#   ./convert-folder-to-webp.sh [DIRECTORY] [QUALITY]
#
#   DIRECTORY  Folder to scan recursively. Defaults to current directory.
#   QUALITY    WebP quality 0-100 (lossy, higher = better). Defaults to 80.
#
# Requires: ffmpeg (built with libwebp support)
#   Debian/Ubuntu: sudo apt install ffmpeg

set -euo pipefail

TARGET_DIR="${1:-.}"
QUALITY="${2:-80}"

if ! command -v ffmpeg &> /dev/null; then
    echo "Error: 'ffmpeg' not found. Install it first:" >&2
    echo "  Debian/Ubuntu: sudo apt install ffmpeg" >&2
    echo "  macOS (Homebrew): brew install ffmpeg" >&2
    exit 1
fi

if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: directory '$TARGET_DIR' does not exist." >&2
    exit 1
fi

# Extensions to convert (case-insensitive)
EXTENSIONS=("jpg" "jpeg" "png" "bmp" "tif" "tiff")

converted=0
skipped=0
failed=0

# Build a find expression matching any of the extensions, case-insensitively
find_args=()
for ext in "${EXTENSIONS[@]}"; do
    find_args+=(-iname "*.${ext}" -o)
done
# remove trailing -o
unset 'find_args[${#find_args[@]}-1]'

# ffmpeg's -q:v for webp goes 0(best)-100(worst)-ish in practice varies,
# but the libwebp encoder in ffmpeg actually uses 0-100 quality directly
# via -qscale, so we pass QUALITY straight through.
while IFS= read -r -d '' img; do
    out="${img%.*}.webp"

    if [ -e "$out" ]; then
        echo "Skip (exists): $out"
        skipped=$((skipped+1))
        continue
    fi

    if ffmpeg -nostdin -y -loglevel error -i "$img" -c:v libwebp -q:v "$QUALITY" "$out"; then
        echo "Converted: $img -> $out"
        converted=$((converted+1))
    else
        echo "Failed: $img" >&2
        failed=$((failed+1))
    fi
done < <(find "$TARGET_DIR" -type f \( "${find_args[@]}" \) -print0)

echo
echo "Done. Converted: $converted, Skipped: $skipped, Failed: $failed"