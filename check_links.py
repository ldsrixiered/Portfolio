"""Optional Python tool: checks that every link in your portfolio still works.
Run:  python check_links.py
Needs only Python 3 (no extra packages)."""
import re, urllib.request, urllib.error

text = open("js/script.js", encoding="utf-8").read()
urls = sorted(set(re.findall(r'url:\s*"(https?://[^"]+)"', text)))

for u in urls:
    req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
    try:
        code = urllib.request.urlopen(req, timeout=10).status
        print(f"OK   {code}  {u}")
    except urllib.error.HTTPError as e:
        # Facebook/Instagram often return 400-series codes to scripts even if the page is fine
        print(f"WARN {e.code}  {u}")
    except Exception as e:
        print(f"FAIL      {u}  ({e})")
