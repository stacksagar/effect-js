# Effect Item with CSS, Pure JavaScript <a href="https://stacksagar.github.io/effect-js">View Demo & Docs</a>

---

## Documentation
**two way you can use animation duration**
- Must you have to writte duration number class in first position example: `class="1000 anotherClass"`  ( `minimum"1"` & `maximum"3000"` )

<div data-effectJs-duration="1000" ></div>
 
 ---

######All Attribute
```html
<div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" or class="1000 anotherClass"
    data-aos-easing="ease" >
</div>
```
  
######Put the required html & css files

```html
Required! <link rel="stylesheet" href="css/effect-js.min.css"> 
```

```html
Required! <script src="js/effect-js.min.js"></script> 
```
 

####All Animation Name
```
fade
fade-up
fade-down
fade-left
fade-right
fade-up-right
fade-up-left
fade-down-right
fade-down-left
flip-up
flip-down
flip-left
flip-right
slide-up
slide-down
slide-left
slide-right
zoom-in
zoom-in-up
zoom-in-down
zoom-in-left
zoom-in-right
zoom-out
zoom-out-up
zoom-out-down
zoom-out-left
zoom-out-right
```

## Example
```
<div data-effectJs-duration="1500" data-effectJs="fade-in"></div>
<div class="1500 anotherClass" data-effectJs="fade-in"></div>
```
  
 
## License

The code and the documentation are released under the [MIT License](LICENSE).
