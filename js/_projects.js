$(document).ready(function() {        
        var modal = document.getElementById('myModal');
        var content = document.getElementById('modal-contentDetails');
        var span = document.getElementsByClassName("close")[0];
        var button;
        
        button = document.getElementById('btn-website');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>My First Website  <a target='_blank' href='http://www.neopets.com/~Poogle10000000000000'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2>A website targeted to Neopets users to provide services related to that site.</h2> \
                    <p><span class='bold-text'>Fall 2006</span>. I was living in El Salvador when I first wrote the code for this website as an eleven-year-old girl. My interest arose after being exposed to an HTML tutorial provided by the same site. The concept of the site is simple: to provide useful links, guides, relevant information and help to Neopets users who are looking for ways to earn Neopoints (the currency used in the site community) in a faster and convenient way. </p> \
                    <p>The site improved significantly since its inception. When it was first advertised to other Neopets users, it was a plain-looking site with data organized in tables (hey! HTML5  wasn't fully developed yet, so much of the features that are offered now were not even widely used back then.) Eventually, I learned CSS and GIMP and transformed the site to a more attractive layout. The site would be maintained and updated for a couple more years, but would reach hiatus as I grew older. <p> \
                    <p>As a more experienced programmer now, it delights me to look back at the quality of code I wrote back then and the improvement I have gained since then. One day I will go back and optimize the code of this site. Or maybe not ;).</p> \
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/neopets-main.png'> \
                </div></div>"; 
        }
        button = document.getElementById('btn-scene3d');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>3D Scene with OpenGL  <a target='_blank' href='https://github.com/nliupeng/3D-Scene'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2>A project involving the use of OpenGL, a library provided by Java, to create an original scene in 3D.</h2> \
                    <p><span class='bold-text'>Fall 2015</span>. OpenGL is a widely-used open graphics standard in the world. Its extensive cross-platform API allows for efficient rendering of 2D and 3D graphics. Over the course of 10 weeks, two other individuals and I worked together in the research, design, and development of this project using this library. At the end of the course, we gained a better understanding of different aspects of graphics like texture mapping, lighting, visible surface detection, and surface rendering. </p> \
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/scene3d-main.png'> \
                </div></div>";
        }
        button = document.getElementById('btn-huffman');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>Huffman Compression  <a target='_blank' href='https://github.com/nliupeng/Huffman'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2>A text file compression program, implemented using priority queues.</h2> \
                    <p><span class='bold-text'>Winter 2015</span>. Imagine a friend approaches you and decides to store a large number of text files but is unable to fit them on his or her flash drive. To tackle this situation, an implementation of a file compression would come in handy. In this project I implemented Huffman encoding using a priority queue to compress text files while preserving the original data.</p> \
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/huffman-main.png'> \
                </div></div>";
        }
        button = document.getElementById('btn-alien');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>Alien Console game  <a target='_blank' href='https://github.com/nliupeng/Alien-Console-Game'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2>A simple project for my introductory programming and problem solving class.</h2> \
                    <p><span class='bold-text'>Spring 2014</span>. This was one of my first projects I was assigned during my second quarter of taking programming classes. The task was to rewrite a video game design concept by J. Hacker using fundamental concepts such as overloading and overriding, abstract methods and classes, and finally object-oriented design.</p> \
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/alien-main.png'> \
                </div></div>";
        }
        button = document.getElementById('btn-website2');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>Personal Website  <a target='_blank' href='https://github.com/nliupeng/nliupeng.github.io'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2>My personal project</h2> \
                    <p><span class='bold-text'>Winter 2016</span>. Once again, let me wish you a warm welcome to my personal website. From its inception and design to its development and general framework, this website has been a learning experience where I had the chance to use my previous knowledge on some front-end programming languages, improve on them, and learn new as well as more back-end programming languages on my own. </p> \
                    <p>Working on this project has been a valuable and rewarding hands-on experience. I got exposed to open sources and new technologies and learned how to implement those resources to better fit my needs. This site is currently in progress, and I am looking forward to keep on learning and improve upon it.<p> \
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/personalweb-main.jpg'> \
                </div></div>";
        }
        button = document.getElementById('btn-crash');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>Car Crash Alert  <a target='_blank' href='https://github.com/nliupeng/Car-Crash'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2>Simulation of a car crash alert program using memory-mapped IO.</h2> \
                    <p><span class='bold-text'>Winter 2015</span>. This is a project for my Computer Organization and Assembly Programming class. I was required to write a program that simulated a car crash alert system in assembly language. </p> \
                    <p>The purpose of the project was to familiarize onself with the MIPS assembly language, the concept of memory-mapped IO, and the polling method, all using QTSPIM simulator.\
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/crash-main.jpg'> \
                </div></div>";
        }
        button = document.getElementById('btn-speedtest');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>Internet Speed Test  <a target='_blank' href='https://github.com/c-nguyen/SpeedTest'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2><This project is currently in progress></h2> \
                    <p><span class='bold-text'>Winter 2016</span>. This is a group project written in Python that will measure Internet speed times by calculating the time it takes for files to be uploaded to and downloaded from a server. As a team of three people, we are getting familiarized with Dropbox SDK and its functionalities to carry out our tasks. The program will also be presented using Graphical User Interfaces. </p> \
                    <p>Work in progress. Check back soon!</p> \
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/speedtest-main.png'> \
                </div></div>";
        }
        button = document.getElementById('btn-mips');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>Procedural Functions  <a target='_blank' href='https://github.com/nliupeng/Procedural-functions'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2>A program written in assembly language and focusing on procedural programming</h2> \
                    <p><span class='bold-text'>Winter 2015</span>. This is a small program for my Computer Organization and Assembly Programming class. A menu prompts the user to choose among five options, including: adding two numbers; multiplying four numbers; reading a string in memory, computing and printing the frequency of each character and then printing the reverse string; writing a recursive procedure printing the Fibonacci sequence up to the inputted number; and lastly, exiting the program with the proper syscall code. </p> \
                    <p>Program was written entirely in assembly language and using QTSPIM as the interpreter.</p> \
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/qtspim-main.png'> \
                </div></div>";
        }
        button = document.getElementById('btn-senior');
        button.onclick = function() {
            modal.style.display = "block";
            content.innerHTML = "<div class='row'><div class='col-sm-7'> \
                    <h1>Road Map  <a target='_blank' href='https://github.com/gonzalez2/AwesomeWebsite'><i class='fa fa-play-circle'></i></a></h1> \
                    <h2><This project is currently in progress></h2> \
                    <p><span class='bold-text'>Winter 2016 - Fall 2016</span>. An independent project made by two students with the goal of serving students on campus and help them better select their classes each quarter/semester. In a little over five months, our goal is to make this happen. Currently working on an efficient algorithm for accurate suggestion results. </p> \
                    <p>Work in progress. Check back soon!</p> \
                </div><div class='col-sm-5'> \
                    <img src='img/pj_imgs/senior-main.png'> \
                </div></div>";
        }

        // <span> (x) is clicked, close modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // when anywhere else is clicked, close modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
});