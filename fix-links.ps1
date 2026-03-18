# Fix placeholder # links across key pages
$base = "C:\Users\barde\OneDrive\Desktop\website"

# Helper: replace card-link href for a named beach card
function Replace-CardLink($content, $beachName, $url) {
    $escaped = [regex]::Escape($beachName)
    $pattern = "(?s)(<h3>" + $escaped + "</h3>.*?)<a href=""#"" class=""card-link"">"
    $replacement = '$1<a href="' + $url + '" class="card-link">'
    return [regex]::Replace($content, $pattern, $replacement)
}

# Helper: replace category arrow-link
function Replace-ArrowLink($content, $h3Text, $url) {
    $escaped = [regex]::Escape($h3Text)
    $pattern = "(?s)(<h3>" + $escaped + "</h3>.*?)<a href=""#"" class=""arrow-link"">"
    $replacement = '$1<a href="' + $url + '" class="arrow-link">'
    return [regex]::Replace($content, $pattern, $replacement)
}

# =============================================
# 1. devon-beaches.html
# =============================================
$file = "$base\devon-beaches.html"
$c = [System.IO.File]::ReadAllText($file)

# Nav links
$c = $c -replace '<li><a href="#">Walks</a></li>', '<li><a href="devon-walks.html">Walks</a></li>'
$c = $c -replace '<li><a href="#">Surfing</a></li>', '<li><a href="surfing-in-devon.html">Surfing</a></li>'
$c = $c -replace '<li><a href="#">Where to Stay</a></li>', '<li><a href="where-to-stay-devon.html">Where to Stay</a></li>'

# Footer Coastal Walks
$c = $c -replace '<li><a href="#">Coastal Walks</a></li>', '<li><a href="devon-walks.html">Coastal Walks</a></li>'

# Beach cards with new pages
$c = Replace-CardLink $c "Lynmouth" "lynmouth-beach.html"
$c = Replace-CardLink $c "Broadsands Beach" "broadsands-beach.html"

# Cards without pages - point to closest existing page
$c = Replace-CardLink $c "Hele Bay" "north-devon-beaches.html"
$c = Replace-CardLink $c "Combe Martin Beach" "north-devon-beaches.html"
$c = Replace-CardLink $c "Lundy Island" "north-devon-beaches.html"
$c = Replace-CardLink $c "Lee Bay" "north-devon-beaches.html"
$c = Replace-CardLink $c "Wildersmouth Beach" "tunnels-beaches-ilfracombe.html"
$c = Replace-CardLink $c "Torre Abbey Sands" "paignton-beach.html"
$c = Replace-CardLink $c "Beacon Cove" "meadfoot-beach.html"
$c = Replace-CardLink $c "Elberry Cove" "broadsands-beach.html"
$c = Replace-CardLink $c "Fishcombe Cove" "devon-beaches.html"
$c = Replace-CardLink $c "Maidencombe" "babbacombe-beach.html"
$c = Replace-CardLink $c "Mansands" "devon-beaches.html"
$c = Replace-CardLink $c "Oddicombe Beach" "babbacombe-beach.html"
$c = Replace-CardLink $c "Woodhuish Beach" "devon-beaches.html"

# Anstey's Cove - handle apostrophe separately
$c = [regex]::Replace($c, "(?s)(<h3>Anstey's Cove</h3>.*?)<a href=""#"" class=""card-link"">", '$1<a href="babbacombe-beach.html" class="card-link">')

[System.IO.File]::WriteAllText($file, $c)
Write-Host "devon-beaches.html done"

# =============================================
# 2. dog-friendly-beaches-north-devon.html
# =============================================
$file = "$base\dog-friendly-beaches-north-devon.html"
$c = [System.IO.File]::ReadAllText($file)

# Nav links
$c = $c -replace '<li><a href="#">Beaches</a></li>', '<li><a href="devon-beaches.html">Beaches</a></li>'
$c = $c -replace '<li><a href="#">Walks</a></li>', '<li><a href="devon-walks.html">Walks</a></li>'
$c = $c -replace '<li><a href="#">Wild Swimming</a></li>', '<li><a href="wild-swimming-devon.html">Wild Swimming</a></li>'
$c = $c -replace '<li><a href="#">Surfing</a></li>', '<li><a href="surfing-in-devon.html">Surfing</a></li>'
$c = $c -replace '<li><a href="#">Where to Stay</a></li>', '<li><a href="where-to-stay-devon.html">Where to Stay</a></li>'

# Breadcrumb
$c = $c -replace '<a href="#">Beaches</a>', '<a href="devon-beaches.html">Beaches</a>'

# Sidebar links - match on unique text AFTER the arrow span, avoiding the arrow char
$c = [regex]::Replace($c, 'href="#"((?s).*?Best beaches for families in Devon</a>)', 'href="devon-with-kids.html"$1')
$c = [regex]::Replace($c, 'href="#"((?s).*?Surfing in North Devon: beginners guide</a>)', 'href="surfing-in-devon.html"$1')
$c = [regex]::Replace($c, 'href="#"((?s).*?Coastal walks near Croyde and Saunton</a>)', 'href="baggy-point-walk.html"$1')
$c = [regex]::Replace($c, 'href="#"((?s).*?Where to stay in North Devon</a>)', 'href="where-to-stay-devon.html"$1')

# Related cards
$c = [regex]::Replace($c, '(<a) href="#" (class="related-card reveal">(?s).*?Saunton Sands)', '$1 href="saunton-sands.html" $2')
$c = [regex]::Replace($c, '(<a) href="#" (class="related-card reveal">(?s).*?Baggy Point)', '$1 href="baggy-point-walk.html" $2')

[System.IO.File]::WriteAllText($file, $c)
Write-Host "dog-friendly-beaches-north-devon.html done"

# =============================================
# 3. devon-outdoor-guide.html
# =============================================
$file = "$base\devon-outdoor-guide.html"
$c = [System.IO.File]::ReadAllText($file)

$c = Replace-ArrowLink $c "Beaches" "devon-beaches.html"
$c = Replace-ArrowLink $c "Coastal Walks" "devon-walks.html"
$c = Replace-ArrowLink $c "Wild Swimming" "wild-swimming-devon.html"
$c = Replace-ArrowLink $c "Surfing" "surfing-in-devon.html"
$c = Replace-ArrowLink $c "Camping &amp; Glamping" "camping-glamping-devon.html"
$c = Replace-ArrowLink $c "Devon with Kids" "devon-with-kids.html"

[System.IO.File]::WriteAllText($file, $c)
Write-Host "devon-outdoor-guide.html done"

# =============================================
# 4. surfing-in-devon.html
# =============================================
$file = "$base\surfing-in-devon.html"
$c = [System.IO.File]::ReadAllText($file)

$c = $c -replace '<li><a href="#">Walks</a></li>', '<li><a href="devon-walks.html">Walks</a></li>'
$c = $c -replace '<li><a href="#">Where to Stay</a></li>', '<li><a href="where-to-stay-devon.html">Where to Stay</a></li>'

[System.IO.File]::WriteAllText($file, $c)
Write-Host "surfing-in-devon.html done"

Write-Host "All done!"
