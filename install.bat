@echo off

npm i
:: yarn
:: pnpm i

if not exist dist (
	npm run build
	:: yarn build
	:: pnpm build
) 

copy dist\* "%appdata%\Caret Beta\Themes\" && echo Themes installed successfully || echo Install failed
