
import textwrap

html = textwrap.dedent(open(r"C:/Users/barde/OneDrive/Desktop/website/write_combe_content.txt", encoding="utf-8").read())
with open(r"C:/Users/barde/OneDrive/Desktop/website/combe-martin-beach.html", "w", encoding="utf-8") as f:
    f.write(html)
print("done")
