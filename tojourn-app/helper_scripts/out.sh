# !/bin/bash
echo "Moving files to root of project due to laziness..."
rm -r ../_next
cp -r out/* ../
rm -r out/