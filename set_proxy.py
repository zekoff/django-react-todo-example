"""
Write proxy value into package.json at workspace startup. Workaround for
Gitpod's dynamic workspace hostnames.
"""
import json
import subprocess

PKG_FILENAME = 'frontend/package.json' 

package_contents = None
with open(PKG_FILENAME, 'r', encoding='utf-8') as package_file:
    package_contents = json.load(package_file)

proxy = subprocess.run(['gp', 'url', '8000'], stdout=subprocess.PIPE).stdout.decode('utf-8').strip()
print(proxy)
package_contents['proxy'] = proxy

with open(PKG_FILENAME, 'w', encoding='utf-8') as package_file:
    json.dump(package_contents, package_file, indent=4)
