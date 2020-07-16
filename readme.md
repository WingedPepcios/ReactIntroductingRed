# Repo Szkoleniowe

To repozytorium służy do prowadzenia zajęć, dlatego proszę na mastera nie pushować!


## Zadanie rozwojowe

Od tej pory każdy tworzy swoją aplikację która będzie miała na celu stworzenie w pełni działającego panelu użytkownika. Do stworzenia aplikacji będziesz wykorzystywać zdobytą wiedzę ze spotkań, a następnie około 1-1.5 godziny zostanie na kodowanie pod okiem mentora. Wygląd aplikacji, funkcje dodatkowe i sam schemat działania aplikacji jest twoją inwencją twórczą. W przypadku problemów, lub braku pomysłu, możesz spytać mentora :)

### Założenie aplikacji:
Piszemy wszystkie funkcje sami, nie korzystamy z rozwiązań gotowych (np. formularzy, etc.). Dozwolone dowolne paczki UI, np Material UI

### Opis zadania:
Tworzymy apliakcję która pozwoli userowi pisać teksty na bloga. Teksty będą zapisywane (można mockupować bramki, local storage etc) w bazie, dostep do nich będzie z poziomu aplikacji. wpisy na bloga będą posiadały shorthandy które będą transpilowane na bieżąco i wyświetlały przypisane do nich wartości. 

Przykładowy schemat shorthandu:
``` js
{{image src="/path/image.png"}}
{{line height="3"}}
```

### Założenia panelu użytkownika:
- Strona dashboard - wyświetla kompleksowe informacje o userze, jego dane personalne, jego wpisy, jego media
- Strona settingsy - uzupełnianie danych, avatary, hasła, tematy etc.
- Strona wpis - pozwala tworzyć wpis na bloga z wykorzystaniem shorthandu, powinna wyświetlać wynik wpisywania na bieżąco

### Sekcje Stałe:

- Aside z menu pozwalającym przełączać się między stronami



## Zadania Kontrolne

### Cz. 1

1. Stwóz komponent UserAvatar, następnie stwórz komponent Image i przekaż mu propsy src i alt.
2. Stwórz tablicę userów i wyświetl listę ich avatarów i ich nazwy.