let tracery = require("tracery-grammar")

function getCharacterDescription () {
	let grammar = tracery.createGrammar({
	"eyes": ["large","small","narrow","sharp","squinty","round","wide-set","close-set","deep-set","sunken","bulging","protruding","wide","hooded","heavy-lidded","bedroom","bright","sparkling","glittering","flecked","dull","bleary","rheumy","cloudy","red-rimmed","beady","birdlike","cat-like","jewel-like","steely","hard","long-lashed"],
	"eye-color": ["chestnut","chocolate brown","cocoa brown","coffee brown","mocha","mahogany","sepia","sienna brown","mink brown","copper","amber","cognac","whiskey","brandy","honey","tawny","topaz","hazel","obsidian","onyx","coal","raven","midnight","sky blue","sunny blue","cornflower blue","steel blue","ice blue","arctic blue","glacial blue","crystal blue","cerulean","electric blue","azure","lake blue","aquamarine","turquoise","denim blue","slate blue / slate gray","storm blue / storm gray","silver / silver gray","chrome","platinum","pewter","smoky gray","ash gray","concrete gray","dove gray","shark gray","fog gray","gunmetal gray","olive","emerald","leaf green","moss green","Eyebrows","arched","straight","plucked","sparse","trim","dark","faint","thin","thick","unruly","bushy","heavy"],
	"skin-color": ["amber","bronze","cinnamon","copper","dark brown","deep brown","ebony","honey","golden","pale","pallid","pasty","fair","light","cream","alabaster","ivory","bisque","milk","porcelain","chalky","sallow","olive","peach","rose / rosy","ruddy","florid","russet","tawny","fawn"],
	"skin": ["lined","wrinkled","seamed","leathery","sagging","drooping","loose","clear","smooth","silken","satiny","dry","flaky","scaly","delicate","thin","translucent","luminescent","baby-soft","flawless","poreless","with large pores","glowing","dewy","dull","velvety","fuzzy","rough","uneven","mottled","dimpled","doughy","firm","freckled","pimply","pockmarked","blemished","pitted","scarred","bruised","veined","scratched","sunburned","weather-beaten","raw","tattooed"],
	"face-structure": ["square","round","oblong","oval","elongated","narrow","heart-shaped","catlike","wolfish","high forehead","broad forehead","prominent brow ridge","protruding brow bone","sharp cheekbones","high cheekbones","angular cheekbones","hollow cheeks","square jaw","chiseled","sculpted","craggy","soft","jowly","jutting chin","pointed chin","weak chin","receding chin","double chin","cleft chin","dimpled chin","visible Adam’s apple"],
	"nose": ["snub","dainty","button","turned-up","long","broad","thin","straight","pointed","crooked","aquiline","roman","bulbous","flared","hawk","strong"],
	"mouth": ["thin","narrow","full","lush","Cupid’s bow","rosebud","dry","cracked","chapped","moist","glossy","straight teeth","gap between teeth","gleaming white teeth","overbite","underbite"],
	"facial-hair": ["clean-shaven","smooth-shaven","beard","neckbeard","goatee","moustache","sideburns","mutton-chop sideburns","stubble","a few days’ growth of beard","five o’ clock shadow"],
	"hair": ["long","short","shoulder-length","loose","limp","dull","shiny","glossy","sleek","smooth","luminous","lustrous","spiky","stringy","shaggy","tangled","messy","tousled","windblown","unkempt","bedhead","straggly","neatly combed","parted","slicked back","cropped","clipped","crewcut","bobbed","mulleted","curly","bushy","frizzy","wavy","straight","lanky","dry","oily","greasy","layered","corkscrewed","spiraled","ringleted","braided","widow’s peaked","bald","shaved","combed over","afro","thick","luxuriant","voluminous","full","wild","untamed","bouncy","wispy","fine","thinning"],
	"hair-color": ["black","blue-black","jet black","raven","ebony","inky black","midnight","sable","salt and pepper","silver / silver gray","charcoal gray","steel gray","white","snow-white","brown","brunette","chocolate brown","coffee brown","ash brown","brown sugar","nut brown","caramel","tawny brown","toffee brown","red","ginger","auburn","Titian-haired","copper","strawberry blonde","butterscotch","honey","wheat","blonde","golden","sandy blond","flaxen","fair-haired","bleached","platinum"],
	"body": ["tall","average height","short","petite","tiny","compact","big","large","burly","beefy","bulky","brawny","barrel-chested","heavy / heavy-set","fat","overweight","obese","flabby","chunky","chubby","pudgy","pot-bellied","portly","thick","stout","lush","plush","full-figured","ample","rounded","generous","voluptuous","curvy","hourglass","plump","leggy / long-legged","gangling","lanky","coltish","lissome","willowy","lithe","lean","slim","slender","trim","thin","skinny","emaciated","gaunt","bony","spare","solid","stocky","wiry","rangy","sinewy","stringy","ropy","sturdy","strapping","powerful","hulking","fit","athletic","toned","built","muscular","chiseled","taut","ripped","Herculean","broad-shouldered","sloping shoulders","bowlegged"],
	"hands": ["delicate","small","large","square","sturdy","strong","smooth","rough","calloused","elegant","plump","manicured","stubby fingered","long fingered","ragged nailed","grimy fingernailed","ink-stained"],
	"connector": ["set against", "contrasted with", "contained within", "set in", "lost in", "buried in", "standing out from"],
	//"origin": ["#eyes.capitalize#, #eye-color# eyes and #skin-color#, #skin# skin. #face-structure.capitalize# face with a #nose# nose and #mouth# mouth. #hair.capitalize#, #hair-color# hair. A #body# body with #hands# hands."]
	"origin": ["#eyes.capitalize#, #eye-color# eyes #connector# #face-structure# facial features. A #nose# nose and #mouth# mouth with #hair#, #hair-color# hair. A #body# body with #hands# hands."]

	})

	grammar.addModifiers(tracery.baseEngModifiers)

	let result = grammar.flatten('#origin#')

	return result
}

module.exports = getCharacterDescription