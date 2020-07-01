---
title: IntelliJ Performance Tweaks
createdDate: "2020-06-19"
updatedDate: "2020-06-19"
image: sticks_of_butter.jpg
draft: false
description: "Couple of tips to ensure your IDE experience is as smooth as butter"
tags: IntelliJ, IDE
path: "/blog/intelli-j-performance-tweaks"
---

# IntelliJ Performance Tweaks (notes)

## Change the memory allocation

IDEA and other IntelliJ products can consume a lot of memory. First thing you should do is allocate the amount of memory it can use at a time. This will vary between machines depending on how much memory your computer has available.

1. Inside your editor go to "Help" dropdown.
2. Click on "Adjust Memory Settings"
3. Allocate however much memory you desire for your IDE.

A good tip on how to figure out how much memory to allocate is to turn on the memory indicator.

_Open up your Action search (press shift multiple times) and type in Memory Indicator, press enter to toggle it on_
With the memory indicator you can watch your IDE usage and tune the heap to an amount that is not too much but also allows it to run without having to constantly free up memory.

## Turn off anti-aliasing (Mac)

So AA (anti-aliasing) is very taxing on the newest version of Mac OS (Catalina) as of right now IDEA version 2020.1.2 the IDE can become unusably slow.
You can go into your settings and find IDE and FONT AA under `Appearance & Behavior -> Appearance` change the IDE and/or EDITOR to no AA or Greyscale AA.
