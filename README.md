# Library App

A browser-based library management application built with HTML, CSS, and vanilla JavaScript. This project focuses on using basic Object-Oriented Programming (OOP) principles to manage data.

**Live Demo:** [https://dariusjderu1.github.io/Library/](https://dariusjderu1.github.io/Library/)

## Technologies Used

* **HTML5:** Basic structure and the native `<dialog>` element for the pop-up form.
* **CSS3:** CSS Grid for the book display layout.
* **JavaScript:** DOM manipulation, event delegation, and Object Prototypes.

## Features & Architecture

* **Object Constructors:** Books are created using a JavaScript Constructor Function, with the status-toggling method attached to the Prototype.
* **Native Modal:** Utilizes the HTML `<dialog>` tag and `.showModal()` for the user input form.
* **Unique Identification:** Each book receives a unique ID using `crypto.randomUUID()` to ensure accurate deletion and status updates.
* **Dynamic UI:** Books can be added, removed, or marked as read/unread directly from the interface.