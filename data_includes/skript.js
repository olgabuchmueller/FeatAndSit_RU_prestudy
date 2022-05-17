PennController.ResetPrefix(null) // Keep here
PennController.AddHost("http://amor.cms.hu-berlin.de/~buchmueo/");
PennController.DebugOff();

////////////////////////////////////comments///////////////////////////////////////////////////////////////////
//this is a draft in progress (14) for a prestudy to denote suitable texts to describe situations referring to the dimensions static/dynamic
//and prepared/spontaneous.

//PennController.Sequence("instructions","instructions_2","description", "example", "situation_rating" ,"send","thanks" ); 

////////////////////////////////////////SEQUENCING/////////////////////////////////////////////////////////////////

sitrat = randomize("situation_rating")
Sequence("instructions",
         "instructions_2",
         "description",
         "example",
         "precheck",
         pick(sitrat,10),
         "check1",
         pick(sitrat,10),
         "check2",
         pick(sitrat,10),
         "check3",
         pick(sitrat,10),
         "send",
         "thanks")
 ;

/////////////////////////////////////////INSTRUCTIONS//////////////////////////////////////////////////////////////
PennController("instructions",

    newHtml("instructions", "instructions.html")
        .center()
        .print()
    ,
    newCanvas("1_emp", 40, 40)
        .print()
    ,
    newButton("continue1", "POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);
////////////////////////////////////INSTRUCTIONS WITH KLICKBOXES///////////////////////////////////////////////////

PennController("instructions_2",

    newHtml("instructions_2", "instructions_2.html")
        .center()      
        .print()
    ,
    newCanvas("1_emp", 40, 40)
        .print()
    ,
    newButton("continue1", "POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait(
        getHtml("instructions_2").test.complete()
            .failure( getHtml("instructions_2").warn())
            ));

///////////////////////////////////DESCRIPTION/////////////////////////////////////////////////////////////////////
PennController("description",

    newHtml("description", "description.html")
         .center()
         .print()
    ,
    newCanvas("11_emp", 40, 40)
        .print()
    ,
    newButton("continue2", "POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);
////////////////////////////////////////EXAMPLE////////////////////////////////////////////////////////////////////

PennController("example",
    
    newTimer("t1", 1000)
            .start()
            .wait()
    ,
    newText("1", "Nyní Vám na příkladu ukážeme, jak přesně bude studie probíhat.")
        .settings.color("blue")
        .center()
        .print()
    ,
    newCanvas("1", 1, 20)
            .print()
    ,
    newTimer("t2", 4000)
            .start()
            .wait()
    ,
    newText("2", "Nejprve se objeví věta, kterou si pozorně přečtete.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newCanvas("2", 1, 30)
            .print()
    ,
    newTimer("t3", 4000)
            .start()
            .wait()
    ,
    newText("Libor čte recept v kuchařské knize.")
            .css("font-size", "large")
            .settings.center()
            .print()
    ,
    newCanvas("2", 1, 20)
            .print()
    ,
    newTimer("t4", 4000)
            .start()
            .wait()
    ,
    newText("3","Poté se objeví otázka, která se ptá na užití jazyka v této větě. V tomto případě je užitím jazyka recept v kuchařské knize.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newTimer("t5",4000)
            .start()
            .wait()
    ,
    newCanvas("3", 1, 30)
            .print()
    ,
    newText("Myslíte si, že je popsané užití jazyka spíše subjektivní či objektivní?")
            .css("font-size", "large")
            .settings.center()
            .print()
    ,
    newTimer("t6",4000)
            .start()
            .wait()
    ,
    newCanvas("4_emp", 1, 20)
            .print()
    ,
    newText("4","Nyní se objeví škála se dvěma póly. Prosíme, věnujte pozornost termínům na koncích škály. Všechno to jsou termíny, které byly vysvětleny v instrukci na začátku studie. Nyní prosíme ohodnoťte užití jazyka z příkladové věty na této škále.")
            .settings.color("blue")
            .print()
    ,
    newCanvas("4", 1, 30)
            .print()
    ,
    newTimer("t66",4000)
            .start()
            .wait()
    ,
    newScale("scale_dyn_stat","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("subjektivní", "subjektivní") )
            .settings.after(newText("objektivní", "objektivní") )
            .settings.center()
            .print()
            .wait()
    ,
    newCanvas("5", 1, 30)
            .print()
    ,
    newTimer("t7", 1000)
            .start()
            .wait()
    ,
    newText("5","Poté, co kliknete na bod na první škále, objeví se druhá škála, a až kliknete na bod na druhé škále, objeví se třetí (poslední) škála. Prosíme, nyní ohodnoťte užití jazyka z příkladové věty i na těchto škálách.")
            .settings.color("blue")
            .print()
    ,
    newCanvas("6", 1, 30)
            .print()
    ,
    newTimer("t8", 4000)
            .start()
            .wait()
    ,
    newText("Nakolik interaktivní vám popsané užití jazyka připadá?")
            .print()
            .settings.center()
    ,
    newCanvas("7", 1, 20)
            .print()
    ,
    newTimer("t9", 4000)
            .start()
            .wait()
    ,
    newScale("scale_dyn_stat2","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("very_interactive", "velmi interaktivní") )
            .settings.after(newText("not_interactive_at_all", "bez interakce")   )
            .settings.center()
            .print()
            .wait()
    ,
    newCanvas("8", 1, 30)
            .print()
    ,
    newTimer("t10", 1000)
            .start()
            .wait()
    ,
    newText("Připadá Vám popsané užití jazyka spíše spontánní či připravené?")
            .print()
            .settings.center()
    ,
    newCanvas("9", 1, 20)
            .print()
    ,
    newTimer("t11", 4000)
            .start()
            .wait()
    ,
    newScale("scale_spo_prep","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("spontánní", "spontánní") )
            .settings.after(newText("připravené", "připravené")   )
            .settings.center()
            .print()
            .wait()
    ,
    newCanvas("10", 1, 30)
            .print()
    ,
    newTimer("t12", 1000)
            .start()
            .wait()
    ,
    newText("6","Poté, co ohodnotíte užití jazyka na všech škálách, můžete přejít na další větu, kterou budete hodnotit na stejných třech škálách.<br><br> Nyní bude následovat kontrolní věta, na níž si sami vyzkoušíte porozumění uvedeným termínům.")
            .settings.color("blue")
            .settings.center()
            .print()
    ,
    newCanvas("11", 1, 20)
            .print()
    ,
    newTimer("t12", 1000)
            .start()
            .wait()
    ,
    newButton("continue", "POKRAČOVAT")
            .settings.center()
            .print()
            .wait()

);

////////////////////////////////////////EXAMPLE CONTROL QUESTION///////////////////////////////////////////////////

PennController("precheck",
               
    newTimer("a", 1000)
            .start()
            .wait()
    ,
               
    newText("Kontrolní věta:")  
            .settings.color("blue")
            .center()
            .print()
    ,
    newTimer("aa", 2000)
            .start()
            .wait() 
    ,
    newCanvas("aa", 1, 30)
            .print()       
    ,
    newText("Pan Soukup mluví s úředníkem v městské bance.")
            .center()
            .print()
    ,
    newTimer("b",1500)
            .start()
            .wait()
    ,
    newCanvas("a", 1, 30)
    .print()
    ,
    newText("Otázka pro kontrolu:")
            .center()
            .print()
    ,
    newCanvas("b", 1, 30)
    .print()
    ,
    newTimer("c", 1000)
            .start()
            .wait()
    ,
    newText("Užitím jazyka je v tomto případě:")
            .center()
            .print()
    ,
    newCanvas("c", 1, 30)
            .print()
    ,
    newButton("true", "konverzace mezi panem Soukupem a úředníkem")
    .print()
    ,
    newButton("false", "to, co si úředník o konverzaci myslí")
    .print()
    ,
    newCanvas("check1", "150em", "5em")
               //.scaling("page")
               .center()
    .settings.add( "left at 35%"    , "middle at 50%", getButton("true" ))
    .settings.add(  "right at 65%" , "middle at 50%", getButton("false"))       
    .print()
    ,
    newText("Right", "Správná odpověď!")
    ,
    newText("Wrong", "Špatná odpověď! V tomto případě myslíme užitím jazyka konverzaci mezi panem Soukupem a úředníkem")
    ,
    newSelector("check1")
    .add( getButton("true"), getButton("false"))
    .wait()
    .test.selected("true")
    .success(getText("Right") .print() .center() .color("green"))
    .failure(getText("Wrong") .print() .center() .color("red"))      
    .log()
    .print()
    .center()
    ,
    newCanvas("d", 1, 30)
    .print()
    ,
    (newButton("Když nyní zmáčkenete tlačítko POKRAČOVAT, přejdete tím k samotné studii.").center() .print().wait())
    
       
);


////////////////////////////////////////CHECKS - AFTER EACH 10 ITEMS SHUFFLED//////////////////////////////////////

PennController("check1",
    
    newTimer("a", 1000)
            .start()
            .wait()
    ,
    newText("Sabina čte kapitolu historického románu.")
            .center()
            .print()
    ,
    newTimer("b",1500)
            .start()
            .wait()
    ,
    newCanvas("a", 1, 30)
    .print()
    ,
    newText("Otázka pro osvěžení paměti:")
            .center()
            .print()
    ,
    newCanvas("b", 1, 30)
    .print()
    ,
    newTimer("c", 1000)
            .start()
            .wait()
    ,
    newText("Užitím jazyka je v tomto případě:")
            .center()
            .print()
    ,
    newCanvas("c", 1, 30)
            .print()
    ,
    newButton("true", "text kapitoly historického románu")
    .print()
    ,
    newButton("false", "proces čtení, odehrávájící se v hlavě Sabiny")
    .print()
    ,
    newCanvas("check1", "150em", "5em")
               //.scaling("page")
               .center()
    .settings.add( "left at 35%"    , "middle at 50%", getButton("true" ))
    .settings.add(  "right at 65%" , "middle at 50%", getButton("false"))       
    .print()
    ,
    newText("Right", "Správná odpověď!")
    ,
    newText("Wrong", "Špatná odpověď! V tomto případě myslíme užitím jazyka text kapitoly historického románu")
    ,
    newSelector("check1")
    .add( getButton("true"), getButton("false"))
    .wait()
    .test.selected("true")
    .success(getText("Right") .print() .center() .color("green"))
    .failure(getText("Wrong") .print() .center() .color("red"))      
    .log()
    .print()
    .center()
    ,
    newCanvas("d", 1, 30)
    .print()
    ,
    (newButton("POKRAČOVAT").center() .print().wait())
    
        );



PennController("check2",
    newTimer("a", 1000)
            .start()
            .wait()
    ,
    newText("Stanislav píše přání pro svou sestru.")
            .center()
            .print()
    ,
    newCanvas("a", 1, 30)
    .print()
    ,
    newTimer("b", 1500)
            .start()
            .wait() 
    ,         
    newText("Otázka pro osvěžení paměti:")
            .center()
            .print()
    ,
    newCanvas("b", 1, 30)
    .print()
    ,
    newTimer("c", 1000)
            .start()
            .wait()
    ,
    newText("Užitím jazyka je v tomto případě:")
            .center()
            .print()
    ,
    newCanvas("c", 1, 30)
            .print()
    ,
    newButton("true", "text přání")
    .print()
    ,
    newButton("false", "příprava předcházející tomu napsat přání")
    .print()
    ,
    newCanvas("check1", "150em", "5em")
               //.scaling("page")
               .center()
    .settings.add( "left at 35%"    , "middle at 50%", getButton("true" ))
    .settings.add(  "right at 65%" , "middle at 50%", getButton("false"))       
    .print()
    ,
    newText("Right", "Správná odpověď!")
    ,
    newText("Wrong", "Špatná odpověď! V tomto případě myslíme užitím jazyka text přání")
    ,
    newSelector("check1")
    .add( getButton("true"), getButton("false"))
    .wait()
    .test.selected("true")
    .success(getText("Right") .print() .center() .color("green"))
    .failure(getText("Wrong") .print() .center() .color("red"))      
    .log()
    .print()
    .center()
    ,
    newCanvas("d", 1, 30)
    .print()
    ,
    (newButton("POKRAČOVAT").center() .print().wait())
    
        );


PennController("check3",
    newTimer("a", 1000)
            .start()
            .wait()
    ,
    newText("Paní Kratochvílová přednáší návštěvníkům na Dni vědy.")
            .center()
            .print()
    ,
    newCanvas("a", 1, 30)
    .print()
    ,
    newTimer("b", 1500)
            .start()
            .wait()
    ,
    newText("Otázka pro osvěžení paměti:")
            .center()
            .print()
    ,
    newCanvas("b", 1, 30)
    .print()
    ,
    newTimer("c", 1000)
            .start()
            .wait()
    ,
    newText("Užitím jazyka je v tomto případě:")
            .center()
            .print()
    ,
    newCanvas("c", 1, 30)
            .print()
    ,
    newButton("true", "to, co paní Kratochvílová říká")
    .print()
    ,
    newButton("false", "myšlenky paní Kratochvílové")
    .print()
    ,
    newCanvas("check1", "150em", "5em")
               //.scaling("page")
               .center()
    .settings.add( "left at 35%"    , "middle at 50%", getButton("true" ))
    .settings.add(  "right at 65%" , "middle at 50%", getButton("false"))       
    .print()
    ,
    newText("Right", "Správná odpověď!")
    ,
    newText("Wrong", "Špatná odpověď! V tomto případě myslíme užitím jazyka to, co paní Kratochvílová říká")
    ,
    newSelector("check1")
    .add( getButton("true"), getButton("false"))
    .wait()
    .test.selected("true")
    .success(getText("Right") .print() .center() .color("green"))
    .failure(getText("Wrong") .print() .center() .color("red"))      
    .log()
    .print()
    .center()
    ,
    newCanvas("d", 1, 30)
    .print()
    ,
    (newButton("POKRAČOVAT").center() .print().wait())
    
        );
    
///////////////////////////////////////////////MAIN PART///////////////////////////////////////////////////////////

PennController.Template( "sentences.csv",
    variable => PennController("situation_rating"
    ,
        newCanvas("2_emp", 1, 80)
            .print()
        ,
        newTimer("timer_1", 1000)
            .start()
            .wait()
        ,
        newText(variable.sentence)
            .css("font-size", "large")
            .settings.center()
            .print()
        ,
        newTimer("timer_2",1500)
            .start()
            .wait()
        ,
        newCanvas("3_emp", 1, 80)
            .print()
        ,
        newText("Myslíte si, že je popsané užití jazyka spíše subjektivní či objektivní?")
            .print()
            .settings.center()
        ,
        newCanvas("4_emp", 1, 30)
            .print()
        ,
        newScale("scale_dyn_stat","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("subjektivní", "subjektivní") )
            .settings.after(newText("objektivní", "objektivní") )
            .settings.center()
            .print()
            .wait()
            .settings.log("rating")
        ,
        newCanvas("5_emp", 1, 80)
            .print()
        ,
        newText("Nakolik interaktivní vám popsané užití jazyka připadá?")
            .print()
            .settings.center()
        ,
        newCanvas("6_emp", 1, 30)
            .print()
        ,
        newScale("scale_dyn_stat2","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("very_interactive", "velmi interaktivní") )
            .settings.after(newText("not_interactive_at_all", "bez interakce")   )
            .settings.center()
            .print()
            .wait()
            .settings.log("rating")
        ,
        newCanvas("7_emp", 1, 80)
            .print()
        ,
        newText("Připadá Vám popsané užití jazyka spíše spontánní či připravené?")
            .print()
            .settings.center()
        ,
        newCanvas("8_emp", 1, 30)
            .print()
        ,
        newScale("scale_spo_prep","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("spontánní", "spontánní") )
            .settings.after(newText("připravené", "připravené")   )
            .settings.center()
            .print()
            .wait()
            .settings.log("scale_spo_prep")
        ,
        newCanvas("9_emp", 80, 80)
            .print()
        ,
        newButton("continue", "POKRAČOVAT")
            .settings.center()
            .print()
            .wait()
            
                )
            
            .log("item_nr", variable.item_nr)
            .log("item_version", variable.item_version)
            .log("dimension_group", variable.dimension_group)
            .log("dimension", variable.dimension)
            .log("agens_gender", variable.agens_gender)
            .log("modality", variable.modality)
            .log("agens_formality", variable.agens_formality)
            .log("sentence", variable.sentence)
                    
                );

///////////////////////////////////////SEND RESULTS////////////////////////////////////////////////////////////////

PennController.SendResults("send");

///////////////////////////////////////THANK YOU AND BEYE//////////////////////////////////////////////////////////

PennController("thanks",
    newText("thanks", "Děkujeme za účast na studii! Zde je místo na Vaše případné připomínky či komentáře. Budeme rádi za Vaši zpětnou vazbu:")
            .css("font-size", "large")
            .settings.center()
            .print()
    ,
    newCanvas("10_emp", 20, 20)
            .print()
    ,
    newTextInput("comment")      
        .settings.center()
        .print()
        .log()
    ,
   newCanvas("10_emp", 20, 20)
            .print()
    ,
    getTextInput("comment").settings.log("comment")
    ,
    newButton("thanks", "Send the comment")
            .settings.center()
            .print()
            .wait()
            
        );

