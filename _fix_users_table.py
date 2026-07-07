import re

filepath = 'loyha4.js'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")
print(f"Line 1316 (idx 1315): {repr(lines[1315][:80])}")
print(f"Line 1319 (idx 1318): {repr(lines[1318][:80])}")
print(f"Line 1324 (idx 1323): {repr(lines[1323][:80])}")
print(f"Line 1325 (idx 1324): {repr(lines[1324][:80])}")
print(f"Line 1326 (idx 1325): {repr(lines[1325][:80])}")
print(f"Line 1327 (idx 1326): {repr(lines[1326][:80])}")

# Find the start/end of the users table render block
# We look for the else block starting after allUsers.length check
start_idx = None
end_idx = None

for i, line in enumerate(lines):
    if "uList.innerHTML = allUsers.map((u, idx) =>" in line:
        start_idx = i
        print(f"\nFound start at line {i+1}: {repr(line[:100])}")
        break

if start_idx is not None:
    # Find the closing of this block - look for ").join('');" 
    for j in range(start_idx, min(start_idx + 20, len(lines))):
        if ").join('');" in lines[j]:
            end_idx = j
            print(f"Found end at line {j+1}: {repr(lines[j][:100])}")
            break

print(f"\nWill replace lines {start_idx+1} to {end_idx+1}")

if start_idx is not None and end_idx is not None:
    new_block = """            let usersHtml = '';
            allUsers.forEach(function(u, idx) {
                var uid = u.id || ('M-' + String(idx + 1).padStart(3, '0'));
                usersHtml += '<tr>' +
                    '<td><span style="background:var(--primary);color:#fff;padding:0.2rem 0.5rem;border-radius:6px;font-size:0.8rem;font-family:monospace">' + uid + '</span></td>' +
                    '<td><strong>' + u.name + '</strong></td>' +
                    '<td style="color:var(--text2); font-size:0.88rem;">' + u.email + '</td>' +
                    '<td><button class="adminUserChatBtn" data-uemail="' + u.email + '" data-uname="' + u.name + '" style="background:rgba(108,92,231,0.1);color:var(--primary);border:none;padding:5px 12px;border-radius:8px;cursor:pointer;font-weight:600;font-size:0.8rem;display:inline-flex;align-items:center;gap:4px;"><svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'14\\' height=\\'14\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><path d=\\'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\'/></svg> Chat</button></td>' +
                    '</tr>';
            });
            uList.innerHTML = usersHtml;
            uList.querySelectorAll('.adminUserChatBtn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    quickChat(btn.getAttribute('data-uemail'), btn.getAttribute('data-uname'));
                });
            });
"""
    lines[start_idx:end_idx+1] = [new_block]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    
    print("\nFile successfully patched!")
    print("New content around the fix:")
    with open(filepath, 'r', encoding='utf-8') as f:
        new_lines = f.readlines()
    for i in range(max(0, start_idx-2), min(len(new_lines), start_idx+20)):
        print(f"  {i+1}: {new_lines[i]}", end='')
else:
    print("ERROR: Could not find the target block!")
