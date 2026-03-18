# Bulk-update About/Privacy/Affiliate footer links across all HTML pages (including /site/ subdir)
$dirs = @(
    "C:\Users\barde\OneDrive\Desktop\website",
    "C:\Users\barde\OneDrive\Desktop\website\site"
)
$count = 0

foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) { continue }
    $files = Get-ChildItem "$dir\*.html"

    foreach ($f in $files) {
        $c = [System.IO.File]::ReadAllText($f.FullName)
        $orig = $c

        $c = $c -replace '<a href="#">About WildDevon</a>', '<a href="about.html">About WildDevon</a>'
        $c = $c -replace '<a href="#">Contact</a>', '<a href="about.html">Contact</a>'
        $c = $c -replace '<a href="#">Privacy Policy</a>', '<a href="privacy-policy.html">Privacy Policy</a>'
        $c = $c -replace '<a href="#" style="color:inherit;">Privacy</a>', '<a href="privacy-policy.html" style="color:inherit;">Privacy</a>'
        $c = $c -replace '<a href="#">Privacy</a>', '<a href="privacy-policy.html">Privacy</a>'
        $c = $c -replace '<a href="#">Affiliate Disclosure</a>', '<a href="affiliate-disclosure.html">Affiliate Disclosure</a>'
        $c = $c -replace '<a href="#" style="color:inherit;">Affiliate Disclosure</a>', '<a href="affiliate-disclosure.html" style="color:inherit;">Affiliate Disclosure</a>'

        if ($c -ne $orig) {
            [System.IO.File]::WriteAllText($f.FullName, $c)
            $count++
        }
    }
}

Write-Host "Updated $count files total"
