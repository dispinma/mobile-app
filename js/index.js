/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


//fetching HTML Elements in variables by ID
var x = document.getElementById("form_sample");
 
var createform = document.createElement('form'); // Create New Element form
 createform.setAttribute("action", ""); // Setting action Attribute on form
 createform.setAttribute("method", "post"); // Setting method Attribute on form
 x.appendChild(createform);
 
var heading = document.createElement('h2'); // Heading of form
 heading.innerHTML = "Contact Form ";
 createform.appendChild(heading);
 
var line = document.createElement('hr'); //giving horizontal row after heading
 createform.appendChild(line);
 
var linebreak = document.createElement('br');
 createform.appendChild(linebreak);
 
var namelabel = document.createElement('label'); // Create Label for name field
 namelabel.innerHTML = "Your Name : "; // Set Field Labels
 createform.appendChild(namelabel);
 
var inputelement = document.createElement('input'); // Create input field for name
 inputelement.setAttribute("type", "text");
 inputelement.setAttribute("name", "dname");
 createform.appendChild(inputelement);
 
var linebreak = document.createElement('br');
 createform.appendChild(linebreak);
 
var emaillabel = document.createElement('label'); //Create Label for email field
 emaillabel.innerHTML = "Your Email : ";
 createform.appendChild(emaillabel);
 
var emailelement = document.createElement('input'); // Create input field for email
 emailelement.setAttribute("type", "text");
 emailelement.setAttribute("name", "demail");
 createform.appendChild(emailelement);
 
var emailbreak = document.createElement('br');
 createform.appendChild(emailbreak);
 
// Append Textarea
var messagelabel = document.createElement('label');
 messagelabel.innerHTML = "Your Message : ";
 createform.appendChild(messagelabel);
 
var texareaelement = document.createElement('textarea');
 texareaelement.setAttribute("name", "dmessage");
 createform.appendChild(texareaelement);
 
var messagebreak = document.createElement('br');
 createform.appendChild(messagebreak);
 
// Append Submit Button
var submitelement = document.createElement('input');
 submitelement.setAttribute("type", "submit");
 submitelement.setAttribute("name", "dsubmit");
 submitelement.setAttribute("value", "Submit");
 createform.appendChild(submitelement);