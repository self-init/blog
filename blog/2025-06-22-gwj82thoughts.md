---
slug: gwj82thoughts
title: "Godot Wild Jam 82: Post-Jam Thoughts"
authors: [william]
tags: [gamedev]
---

This blog post was made on [itch.io](https://selfinit.itch.io/blind-baize/devlog/971759/post-jam-thoughts) and later reuploaded here.

What a fun week!

I first joined the Godot Wild Jam on a whim. I was planning on joining the GMTK jam later this summer, and went to check the start date. While I was browsing itch.io's game jam section I saw that the Godot Wild Jam was starting in literally 15 minutes! The jam looked interesting and while I had used Godot a lot just to mess around and make small projects, I hadn't yet finished anything. So I waited for the jam to start and got to making!

<!-- truncate -->

# Concept

I didn't spend too long thinking up a concept for the game. I'm not sure where I originally got the idea to make a billiards style game, maybe I was just in the mood to play some pool that day. Hiding pool balls from the player seemed like a good way to fit with the theme of the jam, and it was relatively easy to get a basic prototype working in the first day or two. It was definitely fun just to hit the pool balls around and try to score, and the added challenge of keeping track of where they went made the game pretty difficult to get the hang of. However, I think I could have spent a little more time in the concept phase because as it is, the game feels a little slow and lacks a lot of replay-ability. That might be okay for a story game, but for an arcade/high-score game, it doesn't really hold up. I didn't really consider that a lot of the appeal of pool comes a) it's a social experience where you are talking to people while you play, and b) its a skill based game where you can practice and hone your ability over time. I weakened both of these aspects when making my game by making it a) single player, and b) memory-based where you have to keep track of where the balls went, which also makes it harder to hit accurately. I think some simple modifications could make the game a lot more more fun in the long term.

# Code

As this was my first "full" game in Godot, I learned a lot about best practices. I made good use of state machines, but I didn't make a state machine class, which made it hard to keep track of how states interacted and generally made the code feel a little messy. I remember specifically struggling with getting the pool balls to go to the little display at the bottom of the screen after they are pocketed. I had issues with the game state trying to move the ball there before it's animation had finished, and it was generally just a mess. For future projects I think I will probably make a state machine node/resource that I can reuse between projects.

# User Interface

The menu UI was an afterthought with this game. Most of it was thrown together pretty quickly, and I didn't even change the default UI style that Godot uses. I still learn a lot every time I play with Godot's UI. It's pretty intuitive but there parts of it I have hardly touched. I wanted to have a scrolling background on the main menu but I couldn't figure out how to get parallax backgrounds to work and ended up sacrificing that feature to fix bugs and polish the in game graphics.

The UI in the game itself I was pretty proud of. I made heavy use of Line2Ds to construct the various elements. The gizmo that appears under your finger/mouse when you pull and drag was especially fun to work on. It's literally just a Line2D with a width curve on it, but the curve swaps out based on how far you pull it to replicate the effect of pulling putty or dough apart. I wanted the change between the curves to be smoother, but I didn't have enough time to find out how to generate a curve from code, or to come up with some system that would lerp between curves.

# Future Plans

I'm not sure if I plan to come back and work on this game more or not. I have ideas for more game modes/settings, and I have ideas for other features I wanted to implement. I had an idea for an endless mode, where a new pool ball would span in after one was pocketed. I also want to add optional lives to the game, and to add a mode where you only have so many hits before you have to pocket a ball for an even more difficult challenge. Right now there's no progression in the game, I'd like the player to unlock cosmetics as they play. Things like different billiards or pool tables. I also stuck to a letter based rating system in the game to complete the "Report Card" wildcard from the jam, but I think switching to a points system would be better, and could encourage people to share their high scores. I also want to redo a lot of the graphics. While I think the pool balls themselves look nice, the table is very simply constructed out of only a few textures and some Polygon2Ds. Some particle effects and some sounds would round out the actual gameplay very nicely.

# Final Thoughts

Whatever I decide to do (or not do) with this game, it was a great learning experience and taught me a lot of good lessons about using Godot. From control flow to scene organization, there were a lot of things that I will take with me to future projects. Overall the jam was a lot of fun and I hope to participate in the next Godot Wild Jam if I have the time available!