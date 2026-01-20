from PIL import Image
import os

source_path = '/Users/cheolahnjung/.gemini/antigravity/brain/b698d7fb-0bed-4ece-9307-9b39dd0ef30d/uploaded_image_1768823401421.jpg'
output_dir = 'public/images/about'
img = Image.open(source_path)

width, height = img.size
# Dimensions: 1006 x 640

# Key Coordinates
# Split Y between logos and certs
split_y = 180 

# Column widths (roughly thirds)
col_1_x = 335
col_2_x = 670

# Crop Logos (Top Row)
# SingSingFresh (Top-Left)
logo_ssf = img.crop((0, 0, col_1_x, split_y))
logo_ssf.save(os.path.join(output_dir, 'logo_singsingfresh.jpg'))

# Ecofade (Top-Right)
logo_eco = img.crop((col_2_x, 0, width, split_y))
logo_eco.save(os.path.join(output_dir, 'logo_ecofade.jpg'))

# Crop Certifications (Bottom Row)
# EL724 (Bottom-Left)
cert_el724 = img.crop((0, split_y, col_1_x, height))
cert_el724.save(os.path.join(output_dir, 'cert_el724.jpg'))

# Patent (Bottom-Center)
cert_patent = img.crop((col_1_x, split_y, col_2_x, height))
cert_patent.save(os.path.join(output_dir, 'cert_patent.jpg'))

# R&D (Bottom-Right)
cert_rnd = img.crop((col_2_x, split_y, width, height))
cert_rnd.save(os.path.join(output_dir, 'cert_rnd.jpg'))

print("Assets cropped and saved.")
