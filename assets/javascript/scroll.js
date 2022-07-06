const sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '0.5em', origin: 'top', duration : 3000});
// navbar
sr.reveal('nav', {duration : 2500, origin: 'right'})
// inicio
sr.reveal('#inicio')
// projetos
sr.reveal('#projetos', {duration : 2500})
sr.reveal('#projetos ul li')
// contato
sr.reveal('#contato')