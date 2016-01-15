Second-Nav
==========================

A quick solution to add a **second navigation** to your website. This is a popular method used on many websites to avoid users scrolling back up to the top to navigate the site.

**Recommended**: [Animate.css](https://daneden.github.io/animate.css/) - or any css3 animation library. Some code has been taken from Animate.css as a default for this plugin.

How does it work?
==========================
1. Second-Nav visibility will automatically be set to 0 on page load (provided you have the _'animated-hold'_ class in your css).
2. The **base** of the **No Show Area** is taken the point when the second-nav will enter.
3. Once page is scrolled past the point of the **No Show Area**, the second-nav will appear.
4. Upon scrolling past the base of the **No Show Area**, the second-nav will disappear.

Basic Installation
==========================
To get up and running, you will need to add set some html.

##No Show Area
Create an **element** which will be used as an area (or marker) for where the second-nav will not appear (for example a slider or top header section);

```html
<div class="dont_show">
    <!--Second-Nav will not show here when top of viewport is within this area-->
</div>
```

##Second Navigation
Add your navigation bar:
```html
<nav id="second-nav">
  <!-- Second-Nav -->
</nav>
```

##Script
Initiate Plugin:
```javascript
$(document).ready(function() {
    $('#dont_show').secondNav();
});
```

Options
==========================
There are a few options to help customize the plugin to your liking. These can be added as an array of parameters:

```javascript
$(document).ready(function() {
    $('#dont_show').secondNav({
      enter: 'fadeInDown',
      exit: 'fadeOutUp',
      secondNav: '#second-nav'
    });
});
```

**Note**: The default animation classes have been taken from Animate.css

* **enter** (Class) - Set the _second-nav slide-in animation css class_ (Default: slideInDown)
* **exit** (Class) - Set the _second-nav slide-out animation css class_ (Default: slideOutUp)
* **secondNav** (ID) - The ID of the second navigation bar.

Credits
==========================

[Daniel Eden](https://github.com/daneden), creator of Animate.css
