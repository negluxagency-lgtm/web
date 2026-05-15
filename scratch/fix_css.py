import os

path = r"c:\Users\Usuario\nelux-web\app\globals.css"
with open(path, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

# Clean up lines starting from 150 (index 149)
clean_lines = lines[:150]
clean_lines.append(".delay-500 {\n")
clean_lines.append("  transition-delay: 500ms;\n")
clean_lines.append("}\n\n")
clean_lines.append("@layer utilities {\n")
clean_lines.append("  .no-scrollbar::-webkit-scrollbar {\n")
clean_lines.append("    display: none;\n")
clean_lines.append("  }\n")
clean_lines.append("  .no-scrollbar {\n")
clean_lines.append("    -ms-overflow-style: none;\n")
clean_lines.append("    scrollbar-width: none;\n")
clean_lines.append("  }\n")
clean_lines.append("}\n")

with open(path, "w", encoding="utf-8") as f:
    f.writelines(clean_lines)

print("File repaired successfully")
