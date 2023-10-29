1. In the following code, what does the link element do?
Links are in this anchor tag: <a href=“www.link.name”> texts for the link</a> 
Href stands for hyperlink reference 

1. In the following code,  what does a div tag do?
Div is A block division of content
In HTML, the <div> element is a fundamental container element that is used to group and structure content within a webpage. It doesn’t have any inherent visual or semantic meaning of its own but is instead a generic container that can be styled and manipulated using CSS and JavaScript.

1. In the following code, what is the difference between the #title and .grid selector?
Grid: Grid layout. Used for responsive design
Css q: . Is a class selector and # is an id selector.

Class Selectors (.class):
	•	Class selectors are preceded by a dot (.) in CSS (e.g., .my-class).
	•	They are used to target multiple HTML elements that share the same class attribute. Multiple elements can have the same class.
	•	Classes are typically used for styling groups of elements that have something in common, but the class itself doesn’t have to be unique on the page.
	•	You can apply the same class to multiple elements to style them consistently.

	ID Selectors (#id):
	•	ID selectors are preceded by a hash (#) in CSS (e.g., #my-id).
	•	They are used to target a single unique HTML element that has a specific id attribute. IDs must be unique within the document.
	•	IDs are often used when you need to target a specific element for styling or JavaScript manipulation.
	•	Using the same ID for multiple elements is invalid HTML.

1. In the following code, what is the difference between padding and margin?

Padding:
	•	Padding is the space between the content of an element and its inner border.
	•	It is used to control the internal spacing or clearance inside an element.
	•	Padding can be set using properties like padding-top, padding-right, padding-bottom, and padding-left or the shorthand padding property.
	•	Padding does not affect the element’s overall size or layout in relation to other elements. It only affects the space inside the element.

Margin:
	•	Margin is the space outside the border of an element.
	•	It is used to control the spacing between elements, creating gaps or distances between them.
	•	Margin can be set using properties like margin-top, margin-right, margin-bottom, and margin-left or the shorthand margin property.
	•	Margin affects the element’s layout in relation to other elements on the page. It determines how much space an element should have around it.

1. Given this HTML and this CSS how will the images be displayed using flex?

1. What does the following padding CSS do?
See above on padding vs margin

1. What does the following code using arrow syntax function declaration do?
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3

1. What does the following code using map with an array output?
The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

Function	       Meaning	                                        Example
push	           Add an item to the end of the array	           a.push(4)
pop	               Remove an item from the end of the array	       x = a.pop()
slice	           Return a sub-array	                           a.slice(1,-1)
sort	           Run a function to sort an array in place	       a.sort((a,b) => b-a)
values	     Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => 1 < 1)

1. What does the following code output using getElementByID and addEventListener?

1. What does the following line of Javascript do using a # selector?

1. Which of the following are true? (mark all that are true about the DOM)
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.

You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.

1. By default, the HTML span element has a default CSS display property value of: 
inline? 

1. How would you use CSS to change all the div elements to have a background color of red?

1. How would you display an image with a hyperlink in HTML?

<a href="https://www.example.com/">
    <img src="path_to_image.jpg" alt="Description of the Image">
</a>
1. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Content: The actual content of the box, where text and images appear.
Padding: The space between the content and the border.
Border: The boundary surrounding the padding (and content).
Margin: The space outside the border, separating the box from other elements.

1. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

1. What will the following code output when executed using a for loop and console.log?

1. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
var element = document.getElementById("byu");
element.style.color = "green";
or
const element = document.getElementById("byu");
element.style.color = "green";

1. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
First Level Heading: <h1>
Second Level Heading: <h2>
Third Level Heading: <h3>

1. How do you declare the document type to be html?

<!DOCTYPE html>

1. What is valid javascript syntax for if, else, for, while, switch statements?
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}


if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both conditions are false
}


for (initialization; condition; update) {
    // code to be executed for each loop iteration
}




while (condition) {
    // code to be executed as long as the condition is true
}


do {
    // code to be executed
} while (condition);


switch(expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    // ... more cases ...

    default:
        // code to be executed if expression doesn't match any cases
}

1. What is the correct syntax for creating a javascript object?

A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).

const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.

Object-literals
You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.

const obj = {
  a: 3,
  b: 'fish',
};


1. Is is possible to add new properties to javascript objects?
Yes, it is possible to add new properties to JavaScript objects. Here's an example:
let obj = {
  name: "John"
};
// Adding a new property 'age'
obj.age = 30;
console.log(obj);  // Outputs: { name: "John", age: 30 }

obj["city"] = "New York";
console.log(obj);  // Outputs: { name: "John", age: 30, city: "New York" z }


1. If you want to include JavaScript on an HTML page, which tag do you use?
<script src="javascript.js"></script>
src is the JS file name. I think you could either do the name if its in the same file or the file lcoation 

1. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Using querySelector:
let animals = document.querySelectorAll('.animalClass');

animals.forEach(function(animal) {
    if (animal.textContent.trim() === 'animal') {
        animal.textContent = 'crow';
    }
});
Using innerText or textContent:
let elements = document.body.getElementsByTagName('*');  // Get all elements in the body

for(let i = 0; i < elements.length; i++) {
    if (elements[i].textContent === 'animal') {
        elements[i].textContent = 'crow';
    }
}



1. Which of the following correctly describes JSON?

JavaScript Object Notation (JSON).
JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
A JSON document contains one of the following data types:

Type	Example
string	"crockford"
number	42
boolean	true
array	[null,42,"crockford"]
object	{"a":1,"b":"crockford"}
null	null

Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.


1. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
chmod: Modifies the file permissions.
pwd: Prints the current working directory.
cd: Changes the current directory.
ls: Lists files and directories in the current directory.
vim: A text editor.
nano: Another text editor, often considered simpler than vim.
mkdir: Creates a new directory.
mv: Moves or renames files and directories.
rm: Removes files or directories.
man: Displays the manual page for a command.
ssh: Secure Shell; used to securely connect to remote systems.
ps: Displays currently running processes.
wget: Downloads files from the internet.
sudo: Executes a command with superuser privileges.

1. Which of the following console command creates a remote shell session?
ssh -i path/to/PemKey/file ubuntu@[IPaddress] or ubuntu@[domainName]

1. Which of the following is true when the -la parameter is specified for the ls console command?
-la verse -ls

When the -la parameter is specified for the ls console command:

	1.	It lists all files and directories, including those starting with a dot (hidden files).
	2.	It displays the output in a long format, showing additional details like permissions, number of links, owner, group, size, and time of last modification.

So, the -la option provides a detailed view of all files, including hidden ones, in the specified directory.


1. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

Top-Level Domain (TLD):
	•	A top-level domain (TLD) is the highest level in the hierarchical structure of domain names.
	•	TLDs are found at the end of domain names and are often categorized into two main types:
	•	Generic TLDs (gTLDs): These are generic and not tied to a specific country or region. Examples include .com, .org, .net, .info, and .edu.
	•	Country Code TLDs (ccTLDs): These are associated with specific countries or territories. Examples include .us (United States), .uk (United Kingdom), .ca (Canada), and .jp (Japan).
	2.	Subdomain:
	•	A subdomain is a domain that is part of a larger domain or root domain. It appears to the left of the primary domain in a fully qualified domain name (FQDN).
	•	Subdomains are used to organize and categorize content or services within a website or domain.
	•	For example, in the domain “blog.example.com,” “blog” is a subdomain of “example.com.” Subdomains can have their own unique content or functionality.
	3.	Root Domain:
	•	The root domain, also known as the apex domain or second-level domain, is the primary domain in a fully qualified domain name (FQDN).
	•	It is the part of the domain name that is directly registered and represents the main entity or organization.
	•	For example, in the domain “example.com,” “example” is the root domain.

To summarize:

	•	TLDs are the highest level in domain naming, such as .com or .org.
	•	Subdomains are subdivisions of a root domain, like “blog.example.com.”
	•	Root domains are the primary domains, like “example.com,” and are often where websites are hosted or registered.

.click is the top level domain 
Bozo.click is the root domain 
Banana.fruit.bozo.click is the subdomain 



1. Is a web certificate is necessary to use HTTPS.
YES

The secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS). This is basically HTTP with a negotiated secure connection that happens before any data is exchanged. Having a secure connection means that all the data is encrypted using the TLS protocol. TLS is sometimes referred to by a now unsecure predecessor protocol named SSL. TLS works by negotiating a shared secret that is then used to encrypt data. You can see the actual negotiation that happens by using the console browser based application curl, along with the -v parameter to see the verbose output of the HTTPS exchange. The > /dev/null redirection throws away the actual HTTP response, since we only care about the negotiation, by redirecting the output to the null device.

Web certificates are generated by a trusted 3rd party using public/private key encryption. The certificate issuer is responsible for verifying that the certificate owner actually owns the domain name represented by the certificate. Once you have a certificate for your domain name, you can serve the certificate from your web server and then the browser can validate the certificate by using the public keys of the certificate issuer. 

1. Can a DNS A record can point to an IP address or another A record.

In DNS (Domain Name System), an A (Address) record is used to map a domain name to an IPv4 address. It directly associates a domain name with an IP address.

An A record cannot point to another A record. It is designed to resolve a domain name to an IPv4 address only. If you want to associate a domain with another domain (CNAME) or if you want to handle IPv6 addresses (AAAA records), you would use different types of DNS records.

To summarize:

	•	A record maps a domain name to an IPv4 address.
	•	CNAME record (Canonical Name) maps a domain name to another domain name. It’s used for creating aliases or pointing one domain to another.
	•	AAAA record maps a domain name to an IPv6 address, which is used for IPv6 connectivity.

So, if you want to create a chain or reference between multiple domain names, you would typically use CNAME records, not A records.
A DNS A record can only point to an ip address, not another a record 
Cname can point an a record to another a record 

1. Port 443, 80, 22 is reserved for which protocol?

Port 443: This port is commonly used for the HTTPS (Hypertext Transfer Protocol Secure) protocol. It’s used for secure web browsing, encrypting data exchanged between a web browser and a web server.
	2.	Port 80: Port 80 is used for the HTTP (Hypertext Transfer Protocol) protocol. It’s used for regular, non-secure web browsing.
	3.	Port 22: Port 22 is reserved for the SSH (Secure Shell) protocol. It’s used for secure remote access and secure file transfers between computers.

1. What will the following code using Promises output when executed? 
 
JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

pending - Currently running asynchronously
fulfilled - Completed successfully
rejected - Failed to complete
You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2