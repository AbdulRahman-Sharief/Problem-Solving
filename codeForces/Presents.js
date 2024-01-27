var numberOfFriends = +readline();
var arrOfRecieptients = readline().split(" ");
var senders = [];
for (i = 0; i < numberOfFriends; i++) {
  senders[arrOfRecieptients[i]] = i + 1;
}

print(senders.join(" "));
