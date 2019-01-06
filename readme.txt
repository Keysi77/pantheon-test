Pri svojej praci som pouzil Angular 4 + bootstrap 4 + charts.js + wow.js.
Projekt som si vytvoril pomocou Angular CLI a doinstaloval potrebne kniznice, importol moduly (Http a Forms moduly) a vytvoril 2 nove komponenty pre moj projekt.
Ako vyvojove prostredie som pouzil VS Code.

1. uloha
	Prvu uholu sa mi podarilo spravit bez vacsich problemov. 
	Data z endpointu REST API som si fetchol cez http.get a vypisal ich do tabulky. 
	Pomocou podmienok ngIf som vyfiltroval data, aby sa zobrazili len tie pre vek 18-30 rokov (snazil som sa tento krok srpavit aj na strane komponentum, ale nepodarilo sa mi to)

2. uloha 
	Kedze data uz boli fetchnute vykreslil som ich do grafu pomocou kniznice charts.js. 
	Data som si najskor rozparsoval a ulozil do premennych, ktore som vlozil do parametrov chart.js kniznice - os X data pre vek a os Y multiple data pre males, females. 
	V ulohe mi chyba filtrovanie dat (v grafe su vsetky data z response a nie len tie od 18-30 rokov).
	Data su zobrazene v dvoch grafoch - line a bar

3. uloha 
	Data som si fetchol rovnakym sposobom ako v ulohe 1. 
	Pri tvoreni formularu som vyuzil FormsModule a vytvoril inputy pre zadavanie pre uzivatela. 
	Zmeny podla inputov som chcel riesit tym, ze si vytiahnem vzdy value, ktora bola zadana a tu vlozim do url adresy a tym ju prepisem na novu.
	Alebo pomocou http.post kde poslem nove data do REST API.
	Chyba metoda na (submit) button ktora vyberie hodnoty z inputov a priradi ich premennym
	Tento krok sa mi tiez nepodaril zrealizovat do finalnej podoby.
	Tato uloha ma spravene len view aplikacie.
	
BONUS
	Ulohy pre sortovanie a vyhladavanie v tabulke som nestihol.
	Ukladanie historie do local storage som nespravil, nakolko ulohu 3 nemam dokoncenu.
	Kod by sa dal tiez lepsie strukturovat a  popisat a pouzit services