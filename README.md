# ufora
Generating a population of commoners.

This application generates approximately 200-800 D&D commoners complete with names, family relations, and stat blocks in a single village. The entire village is output as PDF and JSON files. To generate a new village, simply run `node app` in the project directory. You may give an optional argument to `app` to generate a specific number of kin.

`app.js` - Generates a new village and outputs a single PDF page per commoner.

`dice.js` – a simple dice roller for standard polyhedral dice. dice.d6() rolls a six-sided die. dice.d12() rolls a twelve-sided, etc.

`namer.js` – accepts two parameters, gender and surname, both can be undefined. Provide ‘male’ or ‘female’ to specify a gender and a specific surname. Or leave either black to have it randomize. Chooses first names for boys and girls plus surnames from a huge list of fantasy sounding names.

`character.js` – Also takes gender and surname as a parameter and returns a character object with name, attributes rolled as straight 3d6s, computed hp, and mod values

`family.js` – Takes father’s name and mother’s name as parameters, calculates number of children, then generates characters for each child. Returns valid json of children

`kin.js` – Generates a random grandfather and grandmother, computes family for them, marries off their children to outsider inlaws, generates the next generation of children, and can potentially marry them off as well (disabled by default, leaving the grandkids as children)

`village.js` – Rolls 3d12 and generates that number of kin groups for an entire village

`city.js` - Generates larger cities by accepting a name for the city and population to approximate.
