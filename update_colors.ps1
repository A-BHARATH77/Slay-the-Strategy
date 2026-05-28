$files = Get-ChildItem -Path "d:\FreeLance\Slay_Final" -Recurse -Include *.tsx,*.jsx,*.ts,*.js -Exclude node_modules
foreach ($file in $files) {
    # Skip node_modules and .next directories just in case Exclude didn't catch them
    if ($file.FullName -match "\\node_modules\\" -or $file.FullName -match "\\\.next\\") {
        continue
    }

    $content = Get-Content $file.FullName -Raw
    if ($null -ne $content) {
        $newContent = $content -replace 'bg-\[#f7f2e6\]', 'bg-[#526855]' `
                               -replace 'backgroundColor=\{"#f7f2e6"\}', 'backgroundColor={"#526855"}' `
                               -replace 'text-\[#516856\]', 'text-[#f7f2e6]' `
                               -replace 'hover:text-\[#516856\]', 'hover:text-[#f7f2e6]'
        if ($content -cne $newContent) {
            Set-Content -Path $file.FullName -Value $newContent -NoNewline
            Write-Host "Updated: $($file.FullName)"
        }
    }
}
