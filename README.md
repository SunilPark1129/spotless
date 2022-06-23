# Spotless
![banner](https://user-images.githubusercontent.com/106734133/175283503-0a21abd4-3580-4a05-b50e-5eaea85249c7.jpg)

Check preview website - [Link](https://sunilpark1129.github.io/spotless/)

## Project Description

- This webpage is my second project work. This time, I focused more on animation styling, which was not present in previous projects.
- This is the website of Spotless Cleaners, service cleaning company in New Jersey. This website tells you what kind of service it is offering.
- When looking at the UI, I made more efforts to visually make it easier to understand what buttons mean for what purpose. (In my previous project, it was difficult to understand which button to click)

## Features
|Feature|Description|
|:--:|:--:|
|Slide Show|<img src="https://user-images.githubusercontent.com/106734133/175283634-a196d06b-9135-43b3-a9bb-d6eda26e9e35.jpg" height="400"><br>This slide show provides guidelines on what users can do on this website. Press the left or right button to move to the next slide.|
|Navbar Scroll Event|<img src="https://user-images.githubusercontent.com/106734133/175283726-2b1e9d81-5626-407f-9746-be4cb388ee11.gif"><br>When you scroll, the `size` and `background-color` in the Navbar will change. This only applies to the Home page (`index.html`). This is because, for design reasons, the screen needs to be filled with images.|
|About Us|<img src="https://user-images.githubusercontent.com/106734133/175283897-997a88c3-59ed-46fe-b6ae-960b72bccad7.gif" height="400"><br>The About Us section describes Spotless and its commitment to service. I tried to give the animation effect a visually smooth feel. Added animations to `images`, `text`, and `buttons`. On mobile sized screens, the effect of the animation moves vertically.|
|Service|<img src="https://user-images.githubusercontent.com/106734133/175284034-9bda5bed-8cbb-4179-8904-73ce8722f288.gif" height="400"><br>In creating this website, I put the most time in the service section. The Services section introduces the services Spotless provides to its customers. If you click the icon, the previously selected icon is moved to its place and the selected icon is painted in a dark color.<br><br>Each icon has an `order`, and I was able to come up with an idea to change the position by using this. Changes the `order` of the selected icon to the `order` of the previously selected icon and set `flex: 1 1 100%` for the newly selected icon so that the left box is used by itself.<br><br>To give the visual effect that the icon the user had previously clicked has replaced the icon box with the new clicked icon, I made it possible for the user to recognize it with an `animation` effect when clicking the icon.|
|Email|<img src="https://user-images.githubusercontent.com/106734133/175284465-6839133f-4c24-4d49-8dd2-71ac417db564.jpg" height="400"><br>The contact section allows users to send an email by entering information in input.|
|Business Hours Checker|<img src="https://user-images.githubusercontent.com/106734133/175284230-e0637416-0eb2-4a7e-853f-491687492b88.jpg"><br>This section displays phone numbers and business hours. By checking the current day of the week with `new Date()`, it tells the user what the business hour is today.|

## Technology Used
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Installation
1. Clone the repo
```
git clone https://github.com/SunilPark1129/spotless.git
```

## That can be improved
This website was created in the past, so I wrote what I felt at the time.
- I thought I should use more annotations to describe when using javascript.
- I need to add more content and features.
- It seems that JavaScript coding can be used more efficiently and lines can be further reduced.

## Project Status
Completed
