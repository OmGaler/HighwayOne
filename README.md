[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/OmGaler/HighwayEight/blob/master/README.md) [![he](https://img.shields.io/badge/lang-he-blue.svg)](https://github.com/OmGaler/HighwayEight/blob/master/README-he.md)

# HighwayEight

A minimal web app for generating Israeli-style highway route shields.
[Launch HighwayEight](https://omgaler.github.io/HighwayEight/)

## Overview

HighwayEight is a lightweight tool for rendering Israeli road number shields directly in the browser. It allows you to input a route number and generate a stylised shield matching the familiar colour-coded system used on Israeli roads.

The app is designed to be:

- Fast and dependency-light
- Visually accurate enough for mockups and presentations  

## Features

- Generate route shields by number  
- Automatic colour selection based on road type:
  - **Blue** – motorways  
  - **Red** – national (primary) routes 
  - **Green** - regional (secondary) routes
  - **Black** - local (tertiary) routes
- Clean rendering using HTML/CSS/SVG  
- Instant preview (no reloads)  
- Regular or small-sized PNG downloads
- Fully static (no backend required)  

## How It Works

1. Enter a road type  
2. Enter a road number  
3. A styled shield is generated dynamically  
4. The result is rendered instantly in the browser that can be copied or downloaded, as either an image (PNG) or vector (SVG) file
