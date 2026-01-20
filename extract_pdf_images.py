import fitz  # PyMuPDF
import os

pdf_path = "/Users/cheolahnjung/Downloads/에코바이오/ecobio_company_int_2026.pdf"
output_dir = "public/images/products"
doc = fitz.open(pdf_path)

# Pages 15-23 (0-indexed: 14-22)
start_page = 14
end_page = 22

for i in range(start_page, end_page + 1):
    page = doc.load_page(i)
    image_list = page.get_images(full=True)
    
    print(f"Processing Page {i+1}...")
    
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        # Determine image name based on page content/order
        # We'll use a generic naming convention and rename if needed
        image_name = f"page_{i+1}_img_{img_index + 1}.{image_ext}"
        image_path = os.path.join(output_dir, image_name)
        
        with open(image_path, "wb") as f:
            f.write(image_bytes)
            
        print(f"Saved: {image_name}")

print("Extraction complete.")
