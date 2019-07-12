# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
  Guild.destroy_all
  User.destroy_all

  private_user_params = {
    email: 'private@disboard.game',
    username: 'Private',
    password: SecureRandom.urlsafe_base64
  }

  demo_user_params = {
    email: 'demouser@disboard.game',
    username: 'Demo User',
    password: 'letsplayboardgames'
  }

  private_user = User.create!(private_user_params)
  Guild.create!(name: 'Private', owner_id: private_user.id)

  demo_user = User.create!(demo_user_params)

  ngnl_users = [
    {email: 'tet@disboard.game', username: 'Tet', password: 'playbytherules'},
    {email: 'sora@disboard.game', username: 'Sora', password: 'handsandfeetgaming'},
    {email: 'shiro@disboard.game', username: 'Shiro', password: 'inbrotheritrust'},
    {email: 'steph@disboard.game', username: 'Steph', password: 'cheatingisunfair'},
    {email: 'jibril@disboard.game', username: 'Jibril', password: 'knowledgeisthebest'},
    {email: 'fiel@disboard.game', username: 'Fiel', password: 'ihavethemagic'},
    {email: 'izuna@disboard.game', username: 'Izuna', password: 'letsplayagain'}
  ]

  
  p 'Seed NGNL Users'
  
  ngnl_users.map! { |user| User.create!(user) }
  
  ngnl_channels = ['avant-heim', 'elven-gard', 'eastern-federation', 'oceando', 'harden-fell', 'elchea']
  
  p 'Seed NGNL Guild'

  disboard_guild = Guild.create!(name: 'Disboard', owner_id: ngnl_users[0].id)
  imageFile = open('https://disboard-seeds.s3-us-west-1.amazonaws.com/disboard_icon.jpg')
  disboard_guild.image.attach(io: imageFile, filename: 'disboard_icon.jpg')
  Channel.create!(guild_id: disboard_guild.id, name: 'general')
  
  p 'Seed NGNL Channels'
  
  ngnl_channels.map! { |channel| Channel.create!(guild_id: disboard_guild.id, name: channel) }

  p 'Seed NGNL Memberships'

  ngnl_users.each { |user| Membership.create!(guild_id: disboard_guild.id, user_id: user.id)}
  Membership.create!(guild_id: disboard_guild.id, user_id: demo_user.id)

  ngnl_quotes = [
    {body: "Life is not a game of luck. If you wanna win, work hard.", user: 1},
    {body: "There is more than one way to win a game. You can win without fighting!", user: 1},
    {body: "It's our job as normal people to ensure the potential of those misunderstood ones are realized.", user: 1},
    {body: "Accept that because we were born with nothing, we can become anything!", user: 1},
    {body: "Because of our weakness, we trained our eyes, ears, and the ability to think. Learning how to survive, that's our trait as humans! The human species can’t use magic and can’t even perceive it – but because we are weak, we have the wisdom to run away from magic and the intelligence to see through it. We don’t have any extraordinary senses. But because we are weak, by learning and gaining experience, we gained the wisdom to achieve the unachievable.", user: 1},
    {body: "There's no more trusted observer than someone who suspects you.", user: 1},
    {body: "In fairy tales, when the protagonists end up in a different world, they do their best to get back home, right? But who would want to go back to a world like that?", user: 1},
    {body: "That’s why we’ll never win.’ If that’s what you’re thinking, you’re doomed to fail.", user: 1},
    {body: "In every time, in every world, the strong polish their fangs while the weak polish their wisdom.", user: 1},
    {body: "If someone wishes to fly, will that let him grow wings? I don’t think so. You don’t change yourself. You change how you approach the problem.", user: 1},
    {body: "Sorry. Our world isn’t as nice a place as yours. When it comes to war and killing, we have far more expertise than you do.", user: 1},
    {body: "Huh? In a real war, what fool waits for their enemy’s 'turn'?", user: 1},
    {body: "The two of us will live as the weak, fight as the weak, and defeat the strong as only the weak can!", user: 1},
    {body: "It's better for a man to be slow than fast.", user: 1},
    {body: "An idiot that knows he’s an idiot, is even harder to deal with than an idiot that thinks he isn’t.", user: 1},
    {body: "Even if I screw up, Shiro’s there for me. That’s why the Blank always wins.", user: 1},
    {body: "'Checkmate' doesn’t mean you’ve simply cornered the enemy king. It’s a declaration that the enemy king is yours. That’s why I said it the first time I met you.", user: 1},
    {body: "The natural enemy of the strong is the weak, but the natural enemy of the weak is not the strong – it is the ones that are even weaker.", user: 1},
    {body: "What kind of king makes his men fight at the front line while he sits behind them relaxing?", user: 1},
    {body: "Whats the probability of drawing the ace of spades from a deck with no jokers? Normaly it would be 1/50. But what if its a brand new deck? The position of cards in a new deck are typically identical, so that means if you take out the jokers and draw the card at the very bottom, it’s the ace of spades almost 100% of the time. Oh that’s right! I didn’t say a word about it being a new deck. Rather, you didn’t ask. Being in the 'know' gives you the power to turn the probability of winning from 1.92% to 100%. The more knowledge of a party will be the inevitable victor.", user: 1},
    {body: "If you think physical toughness and longevity make you strong, you must be seriously lacking in the brain department.", user: 1},
    {body: "We do not stop playing games because we grow old, we grow old because we stop playing.", user: 1},
    {body: "Don't you dare look down on humans.", user: 1},
    {body: "Throughout all of history, no wise king has ever forced his army to obey him through oppression. People will only truly fight for what is right. And there is only one thing that is truly right in this world! The one true, unchanging righteousness in the world is… cuteness! Cute makes right! All our needs, desires, and instincts seek cuteness, and it is for cuteness that we will give everything we have! That’s just the way men are!", user: 1},
    {body: "Oppression. Rule by fear. dictatorships. It’s a strange thing. Throughout history, for some reason, the lives of such rulers have always ended in the same way: Assassination by someone who isn’t even part of a combat unit.", user: 1},
    {body: "In reality, the least interesting answer is usually the correct one.", user: 0},
    {body: "What do you think about your world? Is it fun? Is it easy to live in?", user: 0},
    {body: "Chess is no different than tic-tac-toe.", user: 2},
    {body: "Fulfilled people are just an urban legend.", user: 2},
    {body: "A temporary defeat is nothing if it leads to ultimate victory!", user: 3},
  ]

  p 'Seed NGNL Messages'

  ngnl_quotes.shuffle.each { |quote| Message.create!(body: quote[:body], channel_id: ngnl_channels.sample.id, author_id: ngnl_users[quote[:user]].id)}

  league_users = [
    {email: 'aatrox@league.legends', username: 'Aatrox', password: 'leagueoflegends'},
    {email: 'ahri@league.legends', username: 'Ahri', password: 'leagueoflegends'},
    {email: 'akali@league.legends', username: 'Akali', password: 'leagueoflegends'},
    {email: 'alistar@league.legends', username: 'Alistar', password: 'leagueoflegends'},
    {email: 'amumu@league.legends', username: 'Amumu', password: 'leagueoflegends'},
    {email: 'anivia@league.legends', username: 'Anivia', password: 'leagueoflegends'},
    {email: 'annie@league.legends', username: 'Annie', password: 'leagueoflegends'},
    {email: 'ashe@league.legends', username: 'Ashe', password: 'leagueoflegends'},
    {email: 'aurelionsol@league.legends', username: 'Aurelion Sol', password: 'leagueoflegends'},
    {email: 'azir@league.legends', username: 'Azir', password: 'leagueoflegends'},
    {email: 'bard@league.legends', username: 'Bard', password: 'leagueoflegends'},
    {email: 'blitzcrank@league.legends', username: 'Blitzcrank', password: 'leagueoflegends'},
    {email: 'brand@league.legends', username: 'Brand', password: 'leagueoflegends'},
    {email: 'braum@league.legends', username: 'Braum', password: 'leagueoflegends'},
    {email: 'caitlyn@league.legends', username: 'Caitlyn', password: 'leagueoflegends'},
    {email: 'camille@league.legends', username: 'Camille', password: 'leagueoflegends'},
    {email: 'cassiopeia@league.legends', username: 'Cassiopeia', password: 'leagueoflegends'},
    {email: 'chogath@league.legends', username: "Cho'Gath", password: 'leagueoflegends'},
    {email: 'corki@league.legends', username: "Corki", password: 'leagueoflegends'},
    {email: 'darius@league.legends', username: "Darius", password: 'leagueoflegends'},
    {email: 'diana@league.legends', username: "Diana", password: 'leagueoflegends'},
    {email: 'drmundo@league.legends', username: "Dr. Mundo", password: 'leagueoflegends'},
    {email: 'draven@league.legends', username: "Draven", password: 'leagueoflegends'},
    {email: 'ekko@league.legends', username: "Ekko", password: 'leagueoflegends'},
    {email: 'elise@league.legends', username: "Elise", password: 'leagueoflegends'},
    {email: 'evelynn@league.legends', username: "Evelynn", password: 'leagueoflegends'},
    {email: 'ezreal@league.legends', username: "Ezreal", password: 'leagueoflegends'},
    {email: 'fiddlesticks@league.legends', username: "Fiddlesticks", password: 'leagueoflegends'},
    {email: 'fiora@league.legends', username: "Fiora", password: 'leagueoflegends'},
    {email: 'fizz@league.legends', username: "Fizz", password: 'leagueoflegends'},
    {email: 'galio@league.legends', username: "Galio", password: 'leagueoflegends'},
    {email: 'gangplank@league.legends', username: "Gangplank", password: 'leagueoflegends'},
    {email: 'garen@league.legends', username: "Garen", password: 'leagueoflegends'},
    {email: 'gnar@league.legends', username: "Gnar", password: 'leagueoflegends'},
    {email: 'gragas@league.legends', username: "Gragas", password: 'leagueoflegends'},
    {email: 'graves@league.legends', username: "Graves", password: 'leagueoflegends'},
    {email: 'hecarim@league.legends', username: "Hecarim", password: 'leagueoflegends'},
    {email: 'heimerdinger@league.legends', username: "Heimerdinger", password: 'leagueoflegends'},
    {email: 'illaoi@league.legends', username: "Illaoi", password: 'leagueoflegends'},
    {email: 'irelia@league.legends', username: "Irelia", password: 'leagueoflegends'},
    {email: 'ivern@league.legends', username: "Ivern", password: 'leagueoflegends'},
    {email: 'janna@league.legends', username: "Janna", password: 'leagueoflegends'},
    {email: 'jarvaniv@league.legends', username: "Jarvan IV", password: 'leagueoflegends'},
    {email: 'jax@league.legends', username: "Jax", password: 'leagueoflegends'},
    {email: 'jayce@league.legends', username: "Jayce", password: 'leagueoflegends'},
    {email: 'jhin@league.legends', username: "Jhin", password: 'leagueoflegends'},
    {email: 'jinx@league.legends', username: "Jinx", password: 'leagueoflegends'},
    {email: 'kaisa@league.legends', username: "Kai'Sa", password: 'leagueoflegends'},
    {email: 'kalista@league.legends', username: "Kalista", password: 'leagueoflegends'},
    {email: 'karma@league.legends', username: "Karma", password: 'leagueoflegends'},
    {email: 'karthus@league.legends', username: "Karthus", password: 'leagueoflegends'},
    {email: 'kassadin@league.legends', username: "Kassadin", password: 'leagueoflegends'},
    {email: 'katarina@league.legends', username: "Katarina", password: 'leagueoflegends'},
    {email: 'kayle@league.legends', username: "Kayle", password: 'leagueoflegends'},
    {email: 'kayn@league.legends', username: "Kayn", password: 'leagueoflegends'},
    {email: 'kennen@league.legends', username: "Kennen", password: 'leagueoflegends'},
    {email: 'khazix@league.legends', username: "Kha'Zix", password: 'leagueoflegends'},
    {email: 'kindred@league.legends', username: "Kindred", password: 'leagueoflegends'},
    {email: 'kled@league.legends', username: "Kled", password: 'leagueoflegends'},
    {email: 'kogmaw@league.legends', username: "Kog'Maw", password: 'leagueoflegends'},
    {email: 'leblanc@league.legends', username: "LeBlanc", password: 'leagueoflegends'},
    {email: 'leesin@league.legends', username: "Lee Sin", password: 'leagueoflegends'},
    {email: 'leona@league.legends', username: "Leona", password: 'leagueoflegends'},
    {email: 'lissandra@league.legends', username: "Lissandra", password: 'leagueoflegends'},
    {email: 'lucian@league.legends', username: "Lucian", password: 'leagueoflegends'},
    {email: 'lulu@league.legends', username: "Lulu", password: 'leagueoflegends'},
    {email: 'lux@league.legends', username: "Lux", password: 'leagueoflegends'},
    {email: 'malphite@league.legends', username: "Malphite", password: 'leagueoflegends'},
    {email: 'malzahar@league.legends', username: "Malzahar", password: 'leagueoflegends'},
    {email: 'maokai@league.legends', username: "Maokai", password: 'leagueoflegends'},
    {email: 'masteryi@league.legends', username: "Master Yi", password: 'leagueoflegends'},
    {email: 'missfortune@league.legends', username: "Miss Fortune", password: 'leagueoflegends'},
    {email: 'mordekaiser@league.legends', username: "Mordekaiser", password: 'leagueoflegends'},
    {email: 'morgana@league.legends', username: "Morgana", password: 'leagueoflegends'},
    {email: 'nami@league.legends', username: "Nami", password: 'leagueoflegends'},
    {email: 'nasus@league.legends', username: "Nasus", password: 'leagueoflegends'},
    {email: 'nautilus@league.legends', username: "Nautilus", password: 'leagueoflegends'},
    {email: 'neeko@league.legends', username: "Neeko", password: 'leagueoflegends'},
    {email: 'nidalee@league.legends', username: "Nidalee", password: 'leagueoflegends'},
    {email: 'nocturne@league.legends', username: "Nocturne", password: 'leagueoflegends'},
    {email: 'nunu@league.legends', username: "Nunu & Willump", password: 'leagueoflegends'},
    {email: 'olaf@league.legends', username: "Olaf", password: 'leagueoflegends'},
    {email: 'orianna@league.legends', username: "Orianna", password: 'leagueoflegends'},
    {email: 'ornn@league.legends', username: "Ornn", password: 'leagueoflegends'},
    {email: 'pantheon@league.legends', username: "Pantheon", password: 'leagueoflegends'},
    {email: 'poppy@league.legends', username: "Poppy", password: 'leagueoflegends'},
    {email: 'pyke@league.legends', username: "Pyke", password: 'leagueoflegends'},
    {email: 'qiyana@league.legends', username: "Qiyana", password: 'leagueoflegends'},
    {email: 'quinn@league.legends', username: "Quinn", password: 'leagueoflegends'},
    {email: 'rakan@league.legends', username: "Rakan", password: 'leagueoflegends'},
    {email: 'rammus@league.legends', username: "Rammus", password: 'leagueoflegends'},
    {email: 'reksai@league.legends', username: "Rek'Sai", password: 'leagueoflegends'},
    {email: 'renekton@league.legends', username: "Renekton", password: 'leagueoflegends'},
    {email: 'rengar@league.legends', username: "Rengar", password: 'leagueoflegends'},
    {email: 'riven@league.legends', username: "Riven", password: 'leagueoflegends'},
    {email: 'rumble@league.legends', username: "Rumble", password: 'leagueoflegends'},
    {email: 'ryze@league.legends', username: "Ryze", password: 'leagueoflegends'},
    {email: 'sejuani@league.legends', username: "Sejuani", password: 'leagueoflegends'},
    {email: 'shaco@league.legends', username: "Shaco", password: 'leagueoflegends'},
    {email: 'shen@league.legends', username: "Shen", password: 'leagueoflegends'},
    {email: 'shyvana@league.legends', username: "Shyvana", password: 'leagueoflegends'},
    {email: 'singed@league.legends', username: "Singed", password: 'leagueoflegends'},
    {email: 'sion@league.legends', username: "Sion", password: 'leagueoflegends'},
    {email: 'sivir@league.legends', username: "Sivir", password: 'leagueoflegends'},
    {email: 'skarner@league.legends', username: "Skarner", password: 'leagueoflegends'},
    {email: 'sona@league.legends', username: "Sona", password: 'leagueoflegends'},
    {email: 'soraka@league.legends', username: "Soraka", password: 'leagueoflegends'},
    {email: 'swain@league.legends', username: "Swain", password: 'leagueoflegends'},
    {email: 'sylas@league.legends', username: "Sylas", password: 'leagueoflegends'},
    {email: 'syndra@league.legends', username: "Syndra", password: 'leagueoflegends'},
    {email: 'tahmkench@league.legends', username: "Tahm Kench", password: 'leagueoflegends'},
    {email: 'taliyah@league.legends', username: "Taliyah", password: 'leagueoflegends'},
    {email: 'talon@league.legends', username: "Talon", password: 'leagueoflegends'},
    {email: 'taric@league.legends', username: "Taric", password: 'leagueoflegends'},
    {email: 'teemo@league.legends', username: "Teemo", password: 'leagueoflegends'},
    {email: 'thresh@league.legends', username: "Thresh", password: 'leagueoflegends'},
    {email: 'tristana@league.legends', username: "Tristana", password: 'leagueoflegends'},
    {email: 'trundle@league.legends', username: "Trundle", password: 'leagueoflegends'},
    {email: 'tryndamere@league.legends', username: "Tryndamere", password: 'leagueoflegends'},
    {email: 'twistedfate@league.legends', username: "Twisted Fate", password: 'leagueoflegends'},
    {email: 'twitch@league.legends', username: "Twitch", password: 'leagueoflegends'},
    {email: 'udyr@league.legends', username: "Udyr", password: 'leagueoflegends'},
    {email: 'urgot@league.legends', username: "Urgot", password: 'leagueoflegends'},
    {email: 'varus@league.legends', username: "Varus", password: 'leagueoflegends'},
    {email: 'vayne@league.legends', username: "Vayne", password: 'leagueoflegends'},
    {email: 'veigar@league.legends', username: "Veigar", password: 'leagueoflegends'},
    {email: 'velkoz@league.legends', username: "Vel'Koz", password: 'leagueoflegends'},
    {email: 'vi@league.legends', username: "Vi", password: 'leagueoflegends'},
    {email: 'viktor@league.legends', username: "Viktor", password: 'leagueoflegends'},
    {email: 'vladimir@league.legends', username: "Vladimir", password: 'leagueoflegends'},
    {email: 'volibear@league.legends', username: "Volibear", password: 'leagueoflegends'},
    {email: 'warwick@league.legends', username: "Warwick", password: 'leagueoflegends'},
    {email: 'wukong@league.legends', username: "Wukong", password: 'leagueoflegends'},
    {email: 'xayah@league.legends', username: "Xayah", password: 'leagueoflegends'},
    {email: 'xerath@league.legends', username: "Xerath", password: 'leagueoflegends'},
    {email: 'xinzhao@league.legends', username: "Xin Zhao", password: 'leagueoflegends'},
    {email: 'yasuo@league.legends', username: "Yasuo", password: 'leagueoflegends'},
    {email: 'yorick@league.legends', username: "Yorick", password: 'leagueoflegends'},
    {email: 'yuumi@league.legends', username: "Yuumi", password: 'leagueoflegends'},
    {email: 'zac@league.legends', username: "Zac", password: 'leagueoflegends'},
    {email: 'zed@league.legends', username: "Zed", password: 'leagueoflegends'},
    {email: 'ziggs@league.legends', username: "Ziggs", password: 'leagueoflegends'},
    {email: 'zilean@league.legends', username: "Zilean", password: 'leagueoflegends'},
    {email: 'zoe@league.legends', username: "Zoe", password: 'leagueoflegends'},
    {email: 'zyra@league.legends', username: "Zyra", password: 'leagueoflegends'}
  ]

  league_strings = [
    "Now, hear the silence of annihilation!",
    "Don't you trust me?",
    "Fear the assassin with no master.",
    "Nothing can hold me back!",
    "I thought you'd never pick me.",
    "On my wings.",
    "You wanna play too? It'll be fun!",
    "All the world on one arrow.",
    "Naturally.",
    "Your emperor has returned.",
    "&#127925;&#127926;",
    "Fired up and ready to serve.",
    "Ready to set the world on fire? Heheheh...",
    "The heart is the strongest muscle.",
    "I'm on the case",
    "Precision is the difference between a butcher and a surgeon.",
    "There is no antidote for me.",
    "You'd wish the world you know to end! Yeeeesssss...",
    "I'm up to snuff, and gots me an ace machine!",
    "They will regret opposing me.",
    "A new moon is rising.",
    "Mundo!",
    "Welcome to the League of Draven.",
    "It's not how much time you have, it's how you use it.",
    "Only the spider is safe in her web.",
    "You know you want me.",
    "Quest accepted! ...Wait, where are we going?",
    "Your bidding, master!",
    "I long for a worthy opponent.",
    "Let me at 'em!",
    "Time to make an impact!",
    "Neither the flames nor the depths could claim me.",
    "My heart and sword always for Demacia.",
    "Shubbanuffa.",
    "If you're buying, I'm in!",
    "Dead man walkin'.",
    "Behold, the might of the Shadow Isles.",
    "Indeed, a wise choice.",
    "I'm not big on sermons - broken bones teach better lessons.",
    "Fight for the First Lands!",
    "Happy to sit this one out.",
    "The tempest is at your command.",
    "By my will, this shall be finished.",
    "Let's do this!",
    "I fight for a brighter tomorrow.",
    "In carnage, I bloom, like a flower in the dawn.",
    "Rules are made to be broken... like buildings! Or people!",
    "Are you the hunter... or the prey?",
    "Death to all betrayers.",
    "Always trust your spirit.",
    "Agony, ecstasy, peace. Every passing has a beauty all its own.",
    "The balance of power must be preserved.",
    "Violence solves everything.",
    "They shall tremble at my perfection!",
    "Will you prove worthy? Probably not.",
    "The eyes never lie.",
    "Change is good.",
    "Never one... ...without the other.",
    "I find courage unpredictable, it's total insanity you can rely on!",
    "Time to feast!",
    "Are you certain?",
    "Your will, my hands.",
    "The dawn has arrived.",
    "Foolish child.",
    "Everybody dies. Some just need a little help.",
    "Pleased to meet you!",
    "Let's light it up!",
    "Rock solid.",
    "It is done.",
    "Your reckoning will come either way.",
    "Doubt is the greatest enemy.",
    "Fortune doesn't favor fools.",
    "Destiny. Domination. Deceit.",
    "Your worst decisions will haunt you.",
    "I decide what the tide will bring.",
    "Do not try my patience.",
    "Beware the depths.",
    "Slow down? No! Fast fast fast!",
    "Mmm, the taste of cowardice.",
    "Afraid of the dark?",
    "Every adventure is better with a friend!",
    "C'mon, I won't hurt you. I promise!",
    "This is very exciting.",
    "Fine, we go.",
    "They disgrace the art of war.",
    "Seems you left your brave pants at home. Want me to wait while you go get them?",
    "Sink 'em all.",
    "You may now appreciate me.",
    "I'd keep my head down if I were you.",
    "Let's dance.",
    "Ok.",
    "&#128556;",
    "There is no retreat!",
    "Tonight, we hunt!",
    "Learn from your mistakes.",
    "Let's get in the fight!",
    "Fine.",
    "Trust nothing but your strength.",
    "The joke's on you!",
    "A demonstration of superior judgement.",
    "I smell fear.",
    "How about a drink?",
    "Rest is for the living.",
    "It's just business.",
    "I see the wisdom in that.",
    "&#127925;&#127926;",
    "Let me guide you.",
    "Do not confuse cowardice for wisdom.",
    "No more cages!",
    "People fear what they cannot understand.",
    "You're duller than a broken sandwich.",
    "Grounded?",
    "Pathetic!",
    "That glimmer of hope you see that's me.",
    "Yes, sir!",
    "Any last words?",
    "Let me get in there!",
    "Time to troll!",
    "As you wish.",
    "Lady luck is smilin'.",
    "I'm on to you!",
    "Their fear is wise.",
    "It is not violence. It is... philosophy.",
    "No forgiveness.",
    "Impure fools!",
    "Know that if the tables were turned, I would show you no mercy!",
    "That's unexpected.",
    "Punch first. Ask questions while punching.",
    "Join the glorious evolution.",
    "I'm absolutely livid.",
    "Sniveling cubs!",
    "This is who I am.",
    "I will be the best.",
    "I can never resist an invitation to dance.",
    "Simple fools.",
    "Do not bore me.",
    "No cure for fools.",
    "It's your funeral.",
    "You and me? We got this!",
    "Well, now I'm just mad.",
    "No technique is forbidden.",
    "This'll be a blast!",
    "I knew you would do that...",
    "No, that's not nice!",
    "Soon."
  ]

  p 'Seeding League Users'

  league_users.map! { |user| User.create!(user) }

  p 'Seeding League Guild'

  league_guild = Guild.create!(name: 'League of Legends', owner_id: ngnl_users[0].id)
  imageFile = open('https://disboard-seeds.s3-us-west-1.amazonaws.com/league_icon.png')
  league_guild.image.attach(io: imageFile, filename: 'league_icon.png')

  p 'Seeding League Channels'

  league_general = Channel.create!(guild_id: league_guild.id, name: 'general')
  bandle_city = Channel.create!(guild_id: league_guild.id, name: 'bandle-city')
  bildgewater = Channel.create!(guild_id: league_guild.id, name: 'bildgewater')
  demacia = Channel.create!(guild_id: league_guild.id, name: 'demacia')
  freljord = Channel.create!(guild_id: league_guild.id, name: 'freljord')
  ionia = Channel.create!(guild_id: league_guild.id, name: 'ionia')
  noxus = Channel.create!(guild_id: league_guild.id, name: 'noxus')
  piltover = Channel.create!(guild_id: league_guild.id, name: 'piltover')
  zaun = Channel.create!(guild_id: league_guild.id, name: 'zaun')
  mount_targon = Channel.create!(guild_id: league_guild.id, name: 'mount-targon')
  shadow_isles = Channel.create!(guild_id: league_guild.id, name: 'shadow-isles')
  shurima = Channel.create!(guild_id: league_guild.id, name: 'shurima')
  the_void = Channel.create!(guild_id: league_guild.id, name: 'the-void')

  p 'Seed League Memberships'

  Membership.create!(guild_id: league_guild.id, user_id: ngnl_users[0].id)
  league_users.each { |user| Membership.create!(guild_id: league_guild.id, user_id: user.id)}


  p 'Seeding League Messages'

  league_channels = [ league_general, bandle_city, bildgewater, demacia, freljord, ionia, noxus, piltover, zaun, mount_targon, shadow_isles, shurima, the_void ]
  league_strings.each_with_index { |string, i| Message.create!(body: string, channel_id: league_channels.sample.id, author_id: league_users[i].id) }

  overwatch_guild = Guild.create!(name: 'Overwatch', owner_id: ngnl_users[0].id)
  imageFile = open('https://disboard-seeds.s3-us-west-1.amazonaws.com/overwatch_icon.png')
  overwatch_guild.image.attach(io: imageFile, filename: 'overwatch_icon.png')
  overwatch_general = Channel.create!(guild_id: overwatch_guild.id, name: 'general')
  overwatch = Channel.create!(guild_id: overwatch_guild.id, name: 'overwatch')
  blackwatch = Channel.create!(guild_id: overwatch_guild.id, name: 'blackwatch')
  talon = Channel.create!(guild_id: overwatch_guild.id, name: 'talon')
  shimada_clan = Channel.create!(guild_id: overwatch_guild.id, name: 'shimada-clan')
  junkers = Channel.create!(guild_id: overwatch_guild.id, name: 'junkers')
  vishkar_corp = Channel.create!(guild_id: overwatch_guild.id, name: 'vishkar-corporation')
  Membership.create!(guild_id: overwatch_guild.id, user_id: ngnl_users[0].id)
end