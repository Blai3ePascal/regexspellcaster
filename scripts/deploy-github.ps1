param([string]$Repository = 'Blai3ePascal/regexspellcaster')
$ErrorActionPreference = 'Stop'
if ($Repository -notmatch '^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$') { throw 'Destino inválido. Usa propietario/repositorio.' }
Set-Location (Split-Path -Parent $PSScriptRoot)
foreach ($Command in @('node','npm','git','gh')) { if (-not (Get-Command $Command -ErrorAction SilentlyContinue)) { throw "Falta $Command. Instálalo y vuelve a ejecutar el script." } }
function Run-Checked { param([string]$Program, [string[]]$Arguments) & $Program @Arguments; if ($LASTEXITCODE -ne 0) { throw "Ha fallado $Program (código $LASTEXITCODE)." } }
Run-Checked 'npm' @('test')
Run-Checked 'npm' @('run','check')
Run-Checked 'npm' @('run','build')
Run-Checked 'gh' @('auth','status')
Write-Host "Se creará un repositorio PUBLICO nuevo: $Repository. Se publicará este proyecto en GitHub Pages."
$Response = Read-Host 'Escribe PUBLICAR para continuar'
if ($Response -cne 'PUBLICAR') { Write-Host 'Cancelado. No se ha publicado.'; exit 0 }
if (Test-Path '.git') { throw 'Esta carpeta ya tiene Git. Publica desde tu flujo Git habitual para evitar alterar remotos.' }
Run-Checked 'git' @('init','-b','main')
Run-Checked 'git' @('add','.')
Run-Checked 'git' @('commit','-m','Build Regex Spellcaster webapp with 40 reviewed challenges')
Run-Checked 'gh' @('repo','create',$Repository,'--public','--source=.','--remote=origin','--push','--description','Juego educativo de regex de Pascal: la mazmorra del Oniromante')
Run-Checked 'gh' @('api','--method','POST',"repos/$Repository/pages",'-f','build_type=workflow')
Run-Checked 'gh' @('workflow','run','pages.yml','--repo',$Repository)
Write-Host "Publicación iniciada. Revisa el resultado en https://github.com/$Repository/actions . La web estará disponible cuando el despliegue termine correctamente."
