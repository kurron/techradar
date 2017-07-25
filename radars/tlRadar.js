//This is the title for your window tab, and your Radar
document.title = "TL's Technology Radar (Summer 2017)";


//This is the concentic circles that want on your radar
var radar_arcs = [
    {'r': 100, 'name': 'Adopt'}
    , {'r': 200, 'name': 'Trial'}
    , {'r': 300, 'name': 'Assess'}
    , {'r': 400, 'name': 'Hold'}
    // ,{'r':500,'name':'Possible Extra if you want it'}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    {
        "quadrant": "Techniques",
        "left": 45,
        "top": 18,
        "color": "#8FA227",
        "items": [
            {"name": "Build Upon Commit",         "pc": {"r": 50,  "t": 100}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Consumer Driven Contracts", "pc": {"r": 200,  "t": 100}, "movement": "c", "url": "http://www.google.com"},
            {"name": "By Hand Deployments",       "pc": {"r": 350, "t": 175}, "movement": "c", "url": "http://www.google.com"}
        ]
    },
    {
        "quadrant": "Tools",
        "left": w - 200 + 30,
        "top": 18,
        "color": "#587486",
        "items": [
            {"name": "Ansible",       "pc": {"r": 80,  "t": 10}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Gradle",        "pc": {"r": 20,  "t": 20}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Make",          "pc": {"r": 50,  "t": 20}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Chef",          "pc": {"r": 350, "t": 30}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Ansible Tower", "pc": {"r": 280, "t": 40}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Maven",         "pc": {"r": 350, "t": 86}, "movement": "c", "url": "http://www.google.com"}
        ]
    },
    {
        "quadrant": "Platforms",
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#DC6F1D",
        "items": [
            {"name": "MongoDB as a Service",  "pc": {"r": 200, "t": 185}, "movement": "c", "url": "http://www.google.com"},
            {"name": "RabbitMQ as a Service", "pc": {"r": 200, "t": 195}, "movement": "c", "url": "http://www.google.com"},
            {"name": "EC2",                   "pc": {"r": 90,  "t": 225}, "movement": "c", "url": "http://www.google.com"},
            {"name": "RabbitMQ",              "pc": {"r": 80,  "t": 230}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Kubernetes",            "pc": {"r": 250, "t": 225}, "movement": "c", "url": "http://www.google.com"},
            {"name": "ECS",                   "pc": {"r": 125, "t": 225}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Redis",                 "pc": {"r": 80,  "t": 230}, "movement": "c", "url": "http://www.google.com"},
            {"name": "ELB",                   "pc": {"r": 125, "t": 235}, "movement": "c", "url": "http://www.google.com"},
            {"name": "SES",                   "pc": {"r": 125, "t": 245}, "movement": "c", "url": "http://www.google.com"},
            {"name": "MongoDB",               "pc": {"r": 80,  "t": 245}, "movement": "c", "url": "http://www.google.com"},
            {"name": "MySQL",                 "pc": {"r": 80,  "t": 245}, "movement": "c", "url": "http://www.google.com"},
            {"name": "PostgreSQL",            "pc": {"r": 250, "t": 245}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Amazon Aurora",         "pc": {"r": 250, "t": 255}, "movement": "c", "url": "http://www.google.com"},
            {"name": "API Gateway",           "pc": {"r": 100, "t": 265}, "movement": "c", "url": "http://www.google.com"}
        ]
    },
    {
        "quadrant": "Languages & Frameworks",
        "color": "#B70062",
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            {"name": "Java 8",             "pc": {"r": 50,  "t": 280}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Spring Framework",   "pc": {"r": 20,  "t": 290}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Spring Integration", "pc": {"r": 80,  "t": 290}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Legacy Java",        "pc": {"r": 350, "t": 315}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Spring Cloud",       "pc": {"r": 200, "t": 315}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Groovy",             "pc": {"r": 85,  "t": 330}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Python 3",           "pc": {"r": 90,  "t": 345}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Legacy Python",      "pc": {"r": 365, "t": 355}, "movement": "c", "url": "http://www.google.com"}
        ]
    }
];
