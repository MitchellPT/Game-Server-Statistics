# Game Server monitor
Pull game server stats and display them in your discord server via a bot.
 
## Installation
Download and extract the achrive.
```
npm install
```
Configure config.js
```
node bot.js
```

## Requirements
NodeJS\
(I used v12.16.3)\
Make sure your bot has permisions to edit the channel names!

## Information
Created using [DiscordJS](https://github.com/discordjs/discord.js/) and [GameDig](https://www.npmjs.com/package/gamedig)

Tested using Garry's Mod.

## Game Types
| GameDig Type ID      | Name                                             | See Also                                         |
|----------------------|--------------------------------------------------|--------------------------------------------------|
| a2oa                 | ARMA 2: Operation Arrowhead                      | [Valve Protocol](#valve)                         |
| aaa                  | ARMA: Armed Assault                              |                                                  |
| aapg                 | America's Army: Proving Grounds                  | [Valve Protocol](#valve)                         |
| abioticfactor        | Abiotic Factor                                   | [Valve Protocol](#valve)                         |
| actionsource         | Action: Source                                   | [Valve Protocol](#valve)                         |
| acwa                 | ARMA: Cold War Assault                           |                                                  |
| ahl                  | Action Half-Life                                 | [Valve Protocol](#valve)                         |
| alienarena           | Alien Arena                                      |                                                  |
| alienswarm           | Alien Swarm                                      | [Valve Protocol](#valve)                         |
| americasarmy         | America's Army                                   |                                                  |
| americasarmy2        | America's Army 2                                 |                                                  |
| americasarmy3        | America's Army 3                                 | [Valve Protocol](#valve)                         |
| aoc                  | Age of Chivalry                                  | [Valve Protocol](#valve)                         |
| aoe2                 | Age of Empires 2                                 |                                                  |
| aosc                 | Ace of Spades Classic                            |                                                  |
| arma2                | ARMA 2                                           | [Valve Protocol](#valve)                         |
| arma3                | ARMA 3                                           | [Valve Protocol](#valve)                         |
| armagetronadvanced   | Armagetron Advanced                              |                                                  |
| armareforger         | ARMA: Reforger                                   | [Notes](#armareforger), [Valve Protocol](#valve) |
| armaresistance       | ARMA: Resistance                                 |                                                  |
| asa                  | Ark: Survival Ascended                           | [EOS Protocol](#epic)                            |
| ase                  | Ark: Survival Evolved                            | [Valve Protocol](#valve)                         |
| asr08                | Arca Sim Racing '08                              |                                                  |
| assettocorsa         | Assetto Corsa                                    |                                                  |
| atlas                | Atlas                                            | [Valve Protocol](#valve)                         |
| avorion              | Avorion                                          | [Valve Protocol](#valve)                         |
| avp2                 | Aliens versus Predator 2                         |                                                  |
| avp2010              | Aliens vs. Predator 2010                         | [Valve Protocol](#valve)                         |
| baldursgate          | Baldur's Gate                                    |                                                  |
| ballisticoverkill    | Ballistic Overkill                               | [Valve Protocol](#valve)                         |
| barotrauma           | Barotrauma                                       | [Valve Protocol](#valve)                         |
| bas                  | Build and Shoot                                  |                                                  |
| basedefense          | Base Defense                                     | [Valve Protocol](#valve)                         |
| battalion1944        | Battalion 1944                                   | [Valve Protocol](#valve)                         |
| battlefield1942      | Battlefield 1942                                 |                                                  |
| battlefield2         | Battlefield 2                                    |                                                  |
| battlefield2142      | Battlefield 2142                                 |                                                  |
| battlefield3         | Battlefield 3                                    |                                                  |
| battlefield4         | Battlefield 4                                    |                                                  |
| battlefieldhardline  | Battlefield Hardline                             |                                                  |
| battlefieldvietnam   | Battlefield Vietnam                              |                                                  |
| bbc2                 | Battlefield: Bad Company 2                       |                                                  |
| beammp               | BeamMP (2021)                                    |                                                  |
| blackmesa            | Black Mesa                                       | [Valve Protocol](#valve)                         |
| bladesymphony        | Blade Symphony                                   | [Valve Protocol](#valve)                         |
| brainbread           | BrainBread                                       | [Valve Protocol](#valve)                         |
| brainbread2          | BrainBread 2                                     | [Valve Protocol](#valve)                         |
| breach               | Breach                                           | [Valve Protocol](#valve)                         |
| breed                | Breed                                            |                                                  |
| brink                | Brink                                            | [Valve Protocol](#valve)                         |
| brokeprotocol        | BROKE PROTOCOL                                   | [Notes](#brokeprotocol)                          |
| c2d                  | CS2D                                             |                                                  |
| c3db                 | Commandos 3: Destination Berlin                  |                                                  |
| cacr                 | Command and Conquer: Renegade                    |                                                  |
| chaser               | Chaser                                           |                                                  |
| chrome               | Chrome                                           |                                                  |
| cmw                  | Chivalry: Medieval Warfare                       | [Valve Protocol](#valve)                         |
| cod                  | Call of Duty                                     |                                                  |
| cod2                 | Call of Duty 2                                   |                                                  |
| cod3                 | Call of Duty 3                                   |                                                  |
| cod4mw               | Call of Duty 4: Modern Warfare                   |                                                  |
| codbo3               | Call of Duty: Black Ops 3                        | [Valve Protocol](#valve)                         |
| codenamecure         | Codename CURE                                    | [Valve Protocol](#valve)                         |
| codenameeagle        | Codename Eagle                                   |                                                  |
| codmw2               | Call of Duty: Modern Warfare 2                   |                                                  |
| codmw3               | Call of Duty: Modern Warfare 3                   | [Valve Protocol](#valve)                         |
| coduo                | Call of Duty: United Offensive                   |                                                  |
| codwaw               | Call of Duty: World at War                       |                                                  |
| coj                  | Call of Juarez                                   |                                                  |
| colonysurvival       | Colony Survival                                  | [Valve Protocol](#valve)                         |
| conanexiles          | Conan Exiles                                     | [Notes](#conanexiles), [Valve Protocol](#valve)  |
| contagion            | Contagion                                        | [Valve Protocol](#valve)                         |
| contractjack         | Contract J.A.C.K.                                |                                                  |
| corekeeper           | Core Keeper                                      | [Valve Protocol](#valve)                         |
| counterstrike15      | Counter-Strike 1.5                               |                                                  |
| counterstrike16      | Counter-Strike 1.6                               | [Valve Protocol](#valve)                         |
| counterstrike2       | Counter-Strike 2                                 | [Notes](#cs2), [Valve Protocol](#valve)          |
| crce                 | Cross Racing Championship Extreme                |                                                  |
| creativerse          | Creativerse                                      | [Valve Protocol](#valve)                         |
| crysis               | Crysis                                           |                                                  |
| crysis2              | Crysis 2                                         |                                                  |
| crysiswars           | Crysis Wars                                      |                                                  |
| cscz                 | Counter-Strike: Condition Zero                   | [Valve Protocol](#valve)                         |
| csgo                 | Counter-Strike: Global Offensive                 | [Notes](#csgo), [Valve Protocol](#valve)         |
| css                  | Counter-Strike: Source                           | [Valve Protocol](#valve)                         |
| dab                  | Double Action: Boogaloo                          | [Valve Protocol](#valve)                         |
| daikatana            | Daikatana                                        |                                                  |
| dal                  | Dark and Light                                   | [Valve Protocol](#valve)                         |
| dayofdragons         | Day of Dragons                                   | [Valve Protocol](#valve)                         |
| dayz                 | DayZ                                             | [Notes](#dayz), [Valve Protocol](#valve)         |
| dayzmod              | DayZ Mod                                         | [Valve Protocol](#valve)                         |
| ddd                  | Dino D-Day                                       | [Valve Protocol](#valve)                         |
| ddpt                 | Deadly Dozen: Pacific Theater                    |                                                  |
| deathmatchclassic    | Deathmatch Classic                               | [Valve Protocol](#valve)                         |
| deerhunter2005       | Deer Hunter 2005                                 |                                                  |
| descent3             | Descent 3                                        |                                                  |
| deusex               | Deus Ex                                          |                                                  |
| devastation          | Devastation                                      |                                                  |
| dhe4445              | Darkest Hour: Europe '44-'45                     |                                                  |
| discord              | Discord                                          | [Notes](#discord)                                |
| dmomam               | Dark Messiah of Might and Magic                  | [Valve Protocol](#valve)                         |
| dnf2001              | Duke Nukem Forever 2001                          |                                                  |
| dod                  | Day of Defeat                                    | [Valve Protocol](#valve)                         |
| dods                 | Day of Defeat: Source                            | [Valve Protocol](#valve)                         |
| doi                  | Day of Infamy                                    | [Valve Protocol](#valve)                         |
| doom3                | Doom 3                                           |                                                  |
| dootf                | Drakan: Order of the Flame                       |                                                  |
| dota2                | Dota 2                                           | [Valve Protocol](#valve)                         |
| dow                  | Days of War                                      | [Valve Protocol](#valve)                         |
| dst                  | Don't Starve Together                            | [Valve Protocol](#valve)                         |
| dtr2                 | Dirt Track Racing 2                              |                                                  |
| dystopia             | Dystopia                                         | [Valve Protocol](#valve)                         |
| eco                  | Eco                                              |                                                  |
| egs                  | Empyrion - Galactic Survival                     | [Valve Protocol](#valve)                         |
| eldewrito            | Halo Online - ElDewrito                          |                                                  |
| empiresmod           | Empires Mod                                      | [Valve Protocol](#valve)                         |
| enshrouded           | enshrouded                                       | [Valve Protocol](#valve)                         |
| etqw                 | Enemy Territory: Quake Wars                      |                                                  |
| ets2                 | Euro Truck Simulator 2                           | [Valve Protocol](#valve)                         |
| exfil                | Exfil                                            | [Valve Protocol](#valve)                         |
| f1c9902              | F1 Challenge '99-'02                             |                                                  |
| factorio             | Factorio                                         |                                                  |
| farcry               | Far Cry                                          |                                                  |
| farcry2              | Far Cry 2                                        |                                                  |
| farmingsimulator19   | Farming Simulator 19                             |                                                  |
| farmingsimulator22   | Farming Simulator 22                             |                                                  |
| farmingsimulator25   | Farming Simulator 25                             |                                                  |
| fear                 | F.E.A.R.                                         |                                                  |
| ffow                 | Frontlines: Fuel of War                          |                                                  |
| fof                  | Fistful of Frags                                 | [Valve Protocol](#valve)                         |
| formulaone2002       | Formula One 2002                                 |                                                  |
| fortressforever      | Fortress Forever                                 | [Valve Protocol](#valve)                         |
| foundry              | FOUNDRY                                          | [Valve Protocol](#valve)                         |
| garrysmod            | Garry's Mod                                      | [Valve Protocol](#valve)                         |
| gck                  | Giants: Citizen Kabuto                           |                                                  |
| geneshift            | Geneshift                                        |                                                  |
| globaloperations     | Global Operations                                |                                                  |
| goldeneyesource      | GoldenEye: Source                                | [Valve Protocol](#valve)                         |
| groundbreach         | Ground Breach                                    | [Valve Protocol](#valve)                         |
| gta5am               | Grand Theft Auto V - alt:V Multiplayer           | [Notes](#gta5am)                                 |
| gta5f                | Grand Theft Auto V - FiveM                       | [Notes](#gta5f)                                  |
| gta5r                | Grand Theft Auto V - RageMP                      | [Notes](#gta5r)                                  |
| gtasam               | Grand Theft Auto: San Andreas Multiplayer        |                                                  |
| gtasamta             | Grand Theft Auto: San Andreas - Multi Theft Auto |                                                  |
| gtasao               | Grand Theft Auto: San Andreas OpenMP             |                                                  |
| gtavcmta             | Grand Theft Auto: Vice City - Multi Theft Auto   |                                                  |
| gunmanchronicles     | Gunman Chronicles                                | [Valve Protocol](#valve)                         |
| gus                  | Gore: Ultimate Soldier                           |                                                  |
| halo                 | Halo                                             |                                                  |
| halo2                | Halo 2                                           |                                                  |
| hawakening           | Hawakening                                       | [Notes](#hawakening)                             |
| heretic2             | Heretic II                                       |                                                  |
| hexen2               | Hexen II                                         |                                                  |
| hiddendangerous2     | Hidden & Dangerous 2                             |                                                  |
| hl2d                 | Half-Life 2: Deathmatch                          | [Valve Protocol](#valve)                         |
| hld                  | Half-Life Deathmatch                             | [Valve Protocol](#valve)                         |
| hlds                 | Half-Life Deathmatch: Source                     | [Valve Protocol](#valve)                         |
| hll                  | Hell Let Loose                                   | [Valve Protocol](#valve)                         |
| hlof                 | Half-Life: Opposing Force                        | [Valve Protocol](#valve)                         |
| homefront            | Homefront                                        | [Valve Protocol](#valve)                         |
| homeworld2           | Homeworld 2                                      |                                                  |
| hurtworld            | Hurtworld                                        | [Valve Protocol](#valve)                         |
| i2cs                 | IGI 2: Covert Strike                             |                                                  |
| i2s                  | IL-2 Sturmovik                                   |                                                  |
| icarus               | Icarus                                           | [Valve Protocol](#valve)                         |
| imic                 | Insurgency: Modern Infantry Combat               | [Valve Protocol](#valve)                         |
| insurgency           | Insurgency                                       | [Valve Protocol](#valve)                         |
| insurgencysandstorm  | Insurgency: Sandstorm                            | [Valve Protocol](#valve)                         |
| ironstorm            | Iron Storm                                       |                                                  |
| jb0n                 | James Bond 007: Nightfire                        |                                                  |
| jc2m                 | Just Cause 2 - Multiplayer                       |                                                  |
| jc3m                 | Just Cause 3 - Multiplayer                       | [Valve Protocol](#valve)                         |
| killingfloor         | Killing Floor                                    |                                                  |
| killingfloor2        | Killing Floor 2                                  | [Valve Protocol](#valve)                         |
| kloc                 | Kingpin: Life of Crime                           |                                                  |
| kpctnc               | Kiss: Psycho Circus: The Nightmare Child         |                                                  |
| kreedzclimbing       | Kreedz Climbing                                  | [Valve Protocol](#valve)                         |
| kspd                 | Kerbal Space Program - DMP                       |                                                  |
| l4d                  | Left 4 Dead                                      | [Valve Protocol](#valve)                         |
| l4d2                 | Left 4 Dead 2                                    | [Valve Protocol](#valve)                         |
| m2m                  | Mafia II - Multiplayer                           |                                                  |
| m2o                  | Mafia II - Online                                |                                                  |
| mbe                  | Minecraft: Bedrock Edition                       |                                                  |
| medievalengineers    | Medieval Engineers                               | [Valve Protocol](#valve)                         |
| mgm                  | Mumble - GT Murmur                               | [Notes](#mumble)                                 |
| minecraft            | Minecraft                                        | [Notes](#minecraft)                              |
| minetest             | Minetest                                         |                                                  |
| mnc                  | Monday Night Combat                              | [Valve Protocol](#valve)                         |
| moe                  | Myth of Empires                                  | [Valve Protocol](#valve)                         |
| moh                  | Medal of Honor                                   |                                                  |
| moha                 | Medal of Honor: Airborne                         |                                                  |
| mohaa                | Medal of Honor: Allied Assault                   |                                                  |
| mohaab               | Medal of Honor: Allied Assault Breakthrough      |                                                  |
| mohaas               | Medal of Honor: Allied Assault Spearhead         |                                                  |
| mohpa                | Medal of Honor: Pacific Assault                  |                                                  |
| mohw                 | Medal of Honor: Warfighter                       |                                                  |
| mordhau              | Mordhau                                          | [Valve Protocol](#valve)                         |
| mumble               | Mumble                                           | [Notes](#mumble)                                 |
| mutantfactions       | Mutant Factions                                  |                                                  |
| nab                  | Nerf Arena Blast                                 |                                                  |
| nascarthunder2004    | NASCAR Thunder 2004                              |                                                  |
| naturalselection     | Natural Selection                                | [Valve Protocol](#valve)                         |
| naturalselection2    | Natural Selection 2                              | [Valve Protocol](#valve)                         |
| netpanzer            | netPanzer                                        |                                                  |
| neverwinternights    | Neverwinter Nights                               |                                                  |
| neverwinternights2   | Neverwinter Nights 2                             |                                                  |
| nexuiz               | Nexuiz                                           |                                                  |
| nfshp2               | Need for Speed: Hot Pursuit 2                    |                                                  |
| nitrofamily          | Nitro Family                                     |                                                  |
| nla                  | Nova-Life: Amboise                               | [Valve Protocol](#valve)                         |
| nmrih                | No More Room in Hell                             | [Valve Protocol](#valve)                         |
| nolf2asihw           | No One Lives Forever 2: A Spy in H.A.R.M.'s Way  |                                                  |
| nucleardawn          | Nuclear Dawn                                     | [Valve Protocol](#valve)                         |
| ofcwc                | Operation Flashpoint: Cold War Crisis            |                                                  |
| ofr                  | Operation Flashpoint: Resistance                 |                                                  |
| ohd                  | Operation: Harsh Doorstop                        | [Valve Protocol](#valve)                         |
| onset                | Onset                                            | [Valve Protocol](#valve)                         |
| openarena            | OpenArena                                        |                                                  |
| openttd              | OpenTTD                                          |                                                  |
| painkiller           | Painkiller                                       |                                                  |
| palworld             | Palworld                                         | [Notes](#palworld)                               |
| pce                  | Primal Carnage: Extinction                       | [Valve Protocol](#valve)                         |
| pixark               | PixARK                                           | [Valve Protocol](#valve)                         |
| postal2              | Postal 2                                         |                                                  |
| postscriptum         | Post Scriptum                                    | [Valve Protocol](#valve)                         |
| prb2                 | Project Reality: Battlefield 2                   |                                                  |
| prey                 | Prey                                             |                                                  |
| projectcars          | Project Cars                                     | [Valve Protocol](#valve)                         |
| projectcars2         | Project Cars 2                                   | [Valve Protocol](#valve)                         |
| projectzomboid       | Project Zomboid                                  | [Valve Protocol](#valve)                         |
| pvak2                | Pirates, Vikings, and Knights II                 | [Valve Protocol](#valve)                         |
| q3a                  | Quake 3: Arena                                   |                                                  |
| quake                | Quake                                            |                                                  |
| quake2               | Quake 2                                          |                                                  |
| quake4               | Quake 4                                          |                                                  |
| quakelive            | Quake Live                                       | [Valve Protocol](#valve)                         |
| rainbowsix           | Rainbow Six                                      |                                                  |
| rallisportchallenge  | RalliSport Challenge                             |                                                  |
| rallymasters         | Rally Masters                                    |                                                  |
| rdkf                 | Rag Doll Kung Fu                                 | [Valve Protocol](#valve)                         |
| rdr2r                | Red Dead Redemption 2 - RedM                     |                                                  |
| redline              | Redline                                          |                                                  |
| redorchestra         | Red Orchestra                                    |                                                  |
| redorchestra2        | Red Orchestra 2                                  | [Valve Protocol](#valve)                         |
| renegade10           | Renegade X                                       |                                                  |
| rfactor              | rFactor                                          |                                                  |
| rfactor2             | rFactor 2                                        | [Valve Protocol](#valve)                         |
| ricochet             | Ricochet                                         | [Valve Protocol](#valve)                         |
| risingworld          | Rising World                                     | [Valve Protocol](#valve)                         |
| ron                  | Rise of Nations                                  |                                                  |
| roo4145              | Red Orchestra: Ostfront 41-45                    |                                                  |
| ror2                 | Risk of Rain 2                                   | [Valve Protocol](#valve)                         |
| rs2rs                | Rainbow Six 2: Rogue Spear                       |                                                  |
| rs2v                 | Rising Storm 2: Vietnam                          | [Valve Protocol](#valve)                         |
| rs3rs                | Rainbow Six 3: Raven Shield                      |                                                  |
| rtcw                 | Return to Castle Wolfenstein                     |                                                  |
| rune                 | Rune                                             |                                                  |
| rust                 | Rust                                             | [Valve Protocol](#valve)                         |
| s2ats                | Savage 2: A Tortured Soul                        |                                                  |
| satisfactory         | Satisfactory                                     | [Notes](#satisfactory)                           |
| sdtd                 | 7 Days to Die                                    | [Valve Protocol](#valve)                         |
| serioussam           | Serious Sam                                      |                                                  |
| serioussam2          | Serious Sam 2                                    |                                                  |
| shatteredhorizon     | Shattered Horizon                                | [Valve Protocol](#valve)                         |
| shogo                | Shogo                                            |                                                  |
| shootmania           | Shootmania                                       | [Notes](#nadeo)                                  |
| sin                  | SiN                                              |                                                  |
| sinepisodes          | SiN Episodes                                     | [Valve Protocol](#valve)                         |
| sof                  | Soldier of Fortune                               |                                                  |
| sof2                 | Soldier of Fortune 2                             |                                                  |
| soldat               | Soldat                                           | [Notes](#soldat)                                 |
| sotf                 | Sons Of The Forest                               | [Valve Protocol](#valve)                         |
| soulmask             | Soulmask                                         | [Valve Protocol](#valve)                         |
| spaceengineers       | Space Engineers                                  | [Valve Protocol](#valve)                         |
| squad                | Squad                                            | [Valve Protocol](#valve)                         |
| sstse                | Serious Sam: The Second Encounter                |                                                  |
| stalker              | S.T.A.L.K.E.R.                                   |                                                  |
| starbound            | Starbound                                        | [Valve Protocol](#valve)                         |
| starmade             | StarMade                                         |                                                  |
| starsiege            | Starsiege                                        |                                                  |
| stbc                 | Star Trek: Bridge Commander                      |                                                  |
| stn                  | Survive the Nights                               | [Valve Protocol](#valve)                         |
| stvef                | Star Trek: Voyager - Elite Force                 |                                                  |
| stvef2               | Star Trek: Voyager - Elite Force 2               |                                                  |
| suicidesurvival      | Suicide Survival                                 | [Valve Protocol](#valve)                         |
| svencoop             | Sven Coop                                        | [Valve Protocol](#valve)                         |
| swat4                | SWAT 4                                           |                                                  |
| swb                  | Star Wars: Battlefront                           |                                                  |
| swb2                 | Star Wars: Battlefront 2                         |                                                  |
| swjk2jo              | Star Wars Jedi Knight II: Jedi Outcast           |                                                  |
| swjkja               | Star Wars Jedi Knight: Jedi Academy              |                                                  |
| swrc                 | Star Wars: Republic Commando                     |                                                  |
| synergy              | Synergy                                          | [Valve Protocol](#valve)                         |
| t1s                  | Tribes 1: Starsiege                              |                                                  |
| tacticalops          | Tactical Ops                                     |                                                  |
| tcgraw               | Tom Clancy's Ghost Recon Advanced Warfighter     |                                                  |
| tcgraw2              | Tom Clancy's Ghost Recon Advanced Warfighter 2   |                                                  |
| teamfactor           | Team Factor                                      |                                                  |
| teamfortress2        | Team Fortress 2                                  | [Valve Protocol](#valve)                         |
| teamspeak2           | Teamspeak 2                                      |                                                  |
| teamspeak3           | Teamspeak 3                                      | [Notes](#teamspeak3)                             |
| terminus             | Terminus                                         |                                                  |
| terrariatshock       | Terraria - TShock                                | [Notes](#terraria)                               |
| tfc                  | Team Fortress Classic                            | [Valve Protocol](#valve)                         |
| theforest            | The Forest                                       | [Valve Protocol](#valve)                         |
| thefront             | The Front                                        | [Valve Protocol](#valve)                         |
| thehidden            | The Hidden                                       | [Valve Protocol](#valve)                         |
| theisle              | The Isle                                         | [Valve Protocol](#valve)                         |
| theship              | The Ship                                         | [Valve Protocol](#valve)                         |
| thespecialists       | The Specialists                                  | [Valve Protocol](#valve)                         |
| thps3                | Tony Hawk's Pro Skater 3                         |                                                  |
| thps4                | Tony Hawk's Pro Skater 4                         |                                                  |
| thu2                 | Tony Hawk's Underground 2                        |                                                  |
| tie                  | The Isle Evrima                                  | [EOS Protocol](#epic)                            |
| toh                  | Take On Helicopters                              |                                                  |
| tonolf               | The Operative: No One Lives Forever              |                                                  |
| towerunite           | Tower Unite                                      | [Valve Protocol](#valve)                         |
| toxikk               | TOXIKK                                           |                                                  |
| trackmania2          | Trackmania 2                                     | [Notes](#nadeo)                                  |
| trackmaniaforever    | Trackmania Forever                               | [Notes](#nadeo)                                  |
| tremulous            | Tremulous                                        |                                                  |
| tribesvengeance      | Tribes: Vengeance                                |                                                  |
| tron20               | Tron 2.0                                         |                                                  |
| turok2               | Turok 2                                          |                                                  |
| u2tax                | Unreal 2: The Awakening - XMP                    |                                                  |
| universalcombat      | Universal Combat                                 |                                                  |
| unreal               | Unreal                                           |                                                  |
| unrealtournament     | Unreal Tournament                                |                                                  |
| unrealtournament2003 | Unreal Tournament 2003                           |                                                  |
| unrealtournament2004 | Unreal Tournament 2004                           |                                                  |
| unrealtournament3    | Unreal Tournament 3                              |                                                  |
| unturned             | unturned                                         | [Valve Protocol](#valve)                         |
| urbanterror          | Urban Terror                                     |                                                  |
| v8sc                 | V8 Supercar Challenge                            |                                                  |
| valheim              | Valheim                                          | [Notes](#valheim), [Valve Protocol](#valve)      |
| vampireslayer        | Vampire Slayer                                   | [Valve Protocol](#valve)                         |
| vcm                  | Vice City Multiplayer                            |                                                  |
| ventrilo             | Ventrilo                                         |                                                  |
| vietcong             | Vietcong                                         |                                                  |
| vietcong2            | Vietcong 2                                       |                                                  |
| vintagestory         | Vintage Story                                    |                                                  |
| vrising              | V Rising                                         | [Valve Protocol](#valve)                         |
| warfork              | Warfork                                          |                                                  |
| warsow               | Warsow                                           |                                                  |
| wet                  | Wolfenstein: Enemy Territory                     |                                                  |
| wolfenstein          | Wolfenstein                                      |                                                  |
| wop                  | World Of Padman                                  |                                                  |
| wot                  | Wheel of Time                                    |                                                  |
| wurmunlimited        | Wurm Unlimited                                   | [Valve Protocol](#valve)                         |
| xonotic              | Xonotic                                          |                                                  |
| xpandrally           | Xpand Rally                                      |                                                  |
| zombiemaster         | Zombie Master                                    | [Valve Protocol](#valve)                         |
| zps                  | Zombie Panic: Source                             | [Valve Protocol](#valve)                         |
