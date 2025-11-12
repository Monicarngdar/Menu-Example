import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  statusList = ["unread", "read", "sent", "favourites", "archived", "deleted", "spam"];
  iconList = ["mail", "mail-open",'paper-plane', "heart", "archived", "trash", "warning"];

emailList = [
{
  id: 1,
  subject: "Subject for Email 1",
  from: "hello@gmail.com",
  fromName: "Joe Borg",
  message: "This is the full email message from Joe Borg",
  status: 0,
  icon: 0
},
{
  id: 2,
  subject: "Oh hi Mark",
  from: "jason@gmail.com",
  fromName: "Jason Derulo",
  message: "hello can you help me please?",
  status: 2,
  icon: 2
},
{
  id: 3,
  subject: "Adventure Hills",
  from: "ella@gmail.com",
  fromName: "Ella Marie",
  message: "Come with me on an Adventure in the hills",
  status: 3,
  icon: 3
},
{
  id: 4,
  subject: "Movies Fun",
  from: "sarah@gmail.com",
  fromName: "Sarah Brown",
  message: "Whats your fav movie?",
  status: 5,
  icon: 5
},
{
   id: 5,
  subject: "Summer Activites",
  from: "anna@gmail.com",
  fromName: "Anna Flow",
  message: "Whats your fav movie?",
  status: 6,
  icon: 6
},
{
   id: 6,
  subject: "Chocolate Cake",
  from: "sophie@gmail.com",
  fromName: "Sophie Cooks",
  message: "Heres my chcolatecake recipe",
  status: 3,
  icon: 3
},
{
   id: 7,
  subject: "Lemonade",
  from: "marie@gmail.com",
  fromName: "Marie Borg",
  message: "Come get some lemonade!",
  status: 5,
  icon: 5
},
{
   id: 8,
  subject: "Winter Wonderland",
  from: "scarlet@gmail.com",
  fromName: "Scarlet Miller",
  message: "Wanna go ice skating?",
  status: 3,
  icon: 3
},
{
   id: 9,
  subject: "Snowman",
  from: "mia@gmail.com",
  fromName: "Mia Miller",
  message: "Do you wanna build a snowman",
  status: 6,
  icon: 6
},
{
   id: 10,
  subject: "Cinema",
  from: "andrea@gmail.com",
  fromName: "Andrea Vella",
  message: "Lets go to the cinema today",
  status: 5,
  icon: 5
},
{
   id: 11,
  subject: "Beach",
  from: "sandy@gmail.com",
  fromName: "Sandy Summers",
  message: "Lets go to the beach, beach",
  status: 5,
  icon: 5
},
{
   id: 12,
  subject: "Art",
  from: "palema@gmail.com",
  fromName: "Palema Brown",
  message: "I love to paint mountains",
  status: 2,
  icon: 2
},
{
   id: 13,
  subject: "Sports",
  from: "stephen@gmail.com",
  fromName: "Stephen Curry",
  message: "Basketball Ho! Ho!",
  status: 5,
  icon: 5
},
{
   id: 14,
  subject: "Music",
  from: "chase@gmail.com",
  fromName: "Chase Alantic",
  message: "Listen to our music in Spotify!",
  status: 3,
  icon: 3
},

];

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
