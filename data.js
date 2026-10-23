const COURSE=[
  {
    "title": "Κλάση και αντικείμενο",
    "concept": "Η κλάση περιγράφει τον τύπο· το αντικείμενο είναι συγκεκριμένο στιγμιότυπο.",
    "rule": "Δύο αντικείμενα της ίδιας κλάσης μπορούν να έχουν διαφορετικές τιμές.",
    "classes": [
      "Car",
      "Book",
      "Robot",
      "Student",
      "Lamp"
    ],
    "words": [
      "CLASS",
      "OBJECT",
      "INSTANCE",
      "NEW",
      "TYPE"
    ],
    "items": [
      {
        "question": "Τι περιγράφει η δήλωση class Car;",
        "options": [
          "Ένα συγκεκριμένο αυτοκίνητο",
          "Έναν τύπο αντικειμένων",
          "Μία μεταβλητή",
          "Μία εκτύπωση"
        ],
        "answer": 1,
        "explain": "Η κλάση ορίζει τη δομή και τις λειτουργίες που έχουν τα αντικείμενά της.",
        "correctCode": "class Car { }",
        "wrongCode": "Car class { }"
      },
      {
        "question": "Τι αναπαριστά η μεταβλητή b, εφόσον δημιουργήθηκε ένα Book;",
        "options": [
          "Μέθοδο",
          "Τύπο δεδομένων",
          "Αναφορά σε αντικείμενο",
          "Πακέτο"
        ],
        "answer": 2,
        "explain": "Η b διατηρεί αναφορά στο συγκεκριμένο αντικείμενο Book.",
        "correctCode": "Book b = new Book();",
        "wrongCode": "Book b = Book();"
      },
      {
        "question": "Ποια πρόταση είναι σωστή για δύο αντικείμενα Robot;",
        "options": [
          "Έχουν πάντοτε ίδιες τιμές",
          "Είναι υποχρεωτικά η ίδια αναφορά",
          "Μπορούν να έχουν διαφορετική κατάσταση",
          "Δεν μπορούν να κληθούν μέθοδοί τους"
        ],
        "answer": 2,
        "explain": "Κάθε διαφορετικό αντικείμενο έχει δική του κατάσταση.",
        "correctCode": "Robot r1 = new Robot();",
        "wrongCode": "Robot r1 = new Student();"
      },
      {
        "question": "Τι προσδιορίζει το Student στη δήλωση Student s;",
        "options": [
          "Το όνομα της μεταβλητής",
          "Τον τύπο αναφοράς",
          "Τον κατασκευαστή του υπολογιστή",
          "Την τιμή της ηλικίας"
        ],
        "answer": 1,
        "explain": "Το Student είναι τύπος κλάσης· το s είναι μεταβλητή αναφοράς.",
        "correctCode": "Student s = new Student();",
        "wrongCode": "Student = new Student();"
      },
      {
        "question": "Τι σημαίνει η δημιουργία νέου Lamp;",
        "options": [
          "Αυτόματη εκτέλεση κάθε μεθόδου",
          "Δημιουργία στιγμιοτύπου της κλάσης",
          "Μετατροπή σε String",
          "Αντιγραφή άλλης κλάσης"
        ],
        "answer": 1,
        "explain": "Η new δημιουργεί νέο αντικείμενο, καλώντας κατάλληλο δημιουργό.",
        "correctCode": "Lamp lamp = new Lamp();",
        "wrongCode": "Lamp lamp = Lamp();"
      }
    ]
  },
  {
    "title": "Πεδία και μέθοδοι",
    "concept": "Τα πεδία διατηρούν δεδομένα· οι μέθοδοι ορίζουν λειτουργίες.",
    "rule": "Μια μέθοδος έχει παρενθέσεις στη δήλωση και στην κλήση της.",
    "classes": [
      "Book",
      "Car",
      "Sensor",
      "Player",
      "BankAccount"
    ],
    "words": [
      "FIELD",
      "METHOD",
      "VOID",
      "INT",
      "RETURN"
    ],
    "items": [
      {
        "question": "Ποιο μέλος μπορεί να αποθηκεύει αριθμό σελίδων;",
        "options": [
          "pages",
          "open()",
          "print()",
          "return"
        ],
        "answer": 0,
        "explain": "Το pages είναι πεδίο. Οι open() και print() δηλώνουν λειτουργίες.",
        "correctCode": "int pages = 120;",
        "wrongCode": "int pages();"
      },
      {
        "question": "Ποια δήλωση ορίζει μέθοδο επιτάχυνσης;",
        "options": [
          "int speed;",
          "void accelerate() { }",
          "String model;",
          "double price;"
        ],
        "answer": 1,
        "explain": "Μέθοδος: τύπος επιστροφής, όνομα, παρενθέσεις και σώμα.",
        "correctCode": "void accelerate() { speed++; }",
        "wrongCode": "void accelerate { speed++; }"
      },
      {
        "question": "Το temperature ενός αισθητήρα είναι συνήθως…",
        "options": [
          "δημιουργός",
          "πεδίο",
          "ετικέτα πακέτου",
          "μέθοδος χωρίς όρισμα"
        ],
        "answer": 1,
        "explain": "Το temperature αποθηκεύει την τιμή θερμοκρασίας.",
        "correctCode": "double temperature = 22.5;",
        "wrongCode": "double temperature = \"22.5\";"
      },
      {
        "question": "Ποια λειτουργία αυξάνει το score;",
        "options": [
          "int score;",
          "void addPoint() { score++; }",
          "String name;",
          "boolean active;"
        ],
        "answer": 1,
        "explain": "Το addPoint() είναι μέθοδος που αλλάζει πεδίο.",
        "correctCode": "void addPoint() { score++; }",
        "wrongCode": "void addPoint { score++; }"
      },
      {
        "question": "Ποια δήλωση επιστρέφει υπόλοιπο;",
        "options": [
          "double balance;",
          "void balance;",
          "double getBalance() { return balance; }",
          "new balance()"
        ],
        "answer": 2,
        "explain": "Το return επιστρέφει τιμή συμβατή με τον δηλωμένο τύπο επιστροφής.",
        "correctCode": "double getBalance() { return balance; }",
        "wrongCode": "double getBalance() { return; }"
      }
    ]
  },
  {
    "title": "Δημιουργία με new",
    "concept": "Ο τελεστής new δημιουργεί αντικείμενο και εκτελεί δημιουργό.",
    "rule": "Η δήλωση μιας αναφοράς δεν σημαίνει από μόνη της δημιουργία αντικειμένου.",
    "classes": [
      "Student",
      "Book",
      "Car",
      "Robot",
      "Ticket"
    ],
    "words": [
      "NEW",
      "OBJECT",
      "NULL",
      "REFERENCE",
      "CLASS"
    ],
    "items": [
      {
        "question": "Ποια έκφραση δημιουργεί Student;",
        "options": [
          "Student s;",
          "new Student()",
          "Student.class",
          "Student s = null;"
        ],
        "answer": 1,
        "explain": "Η new Student() καλεί δημιουργό και δημιουργεί αντικείμενο.",
        "correctCode": "Student s = new Student();",
        "wrongCode": "Student s = Student();"
      },
      {
        "question": "Τι ισχύει μετά τη δήλωση Book b = null;",
        "options": [
          "Υπάρχει νέο Book",
          "Η b δεν δείχνει σε αντικείμενο",
          "Εκτελείται ο δημιουργός",
          "Το βιβλίο έχει μηδενικές σελίδες"
        ],
        "answer": 1,
        "explain": "Η null δηλώνει απουσία αναφοράς σε αντικείμενο.",
        "correctCode": "Book b = null;",
        "wrongCode": "Book b = new null();"
      },
      {
        "question": "Ποια σύνταξη δημιουργίας Car είναι σωστή;",
        "options": [
          "Car c = new Car();",
          "Car c = new;",
          "Car c = Car();",
          "new Car c;"
        ],
        "answer": 0,
        "explain": "Η μορφή Type variable = new Type(); είναι έγκυρη εφόσον υπάρχει κατάλληλος δημιουργός.",
        "correctCode": "Car c = new Car();",
        "wrongCode": "Car c = new Car;"
      },
      {
        "question": "Τι δημιουργούν δύο κλήσεις new Robot();",
        "options": [
          "Ένα μόνο αντικείμενο",
          "Δύο διαφορετικά αντικείμενα",
          "Δύο διαφορετικές κλάσεις",
          "Καμία αναφορά"
        ],
        "answer": 1,
        "explain": "Κάθε εκτέλεση new δημιουργεί νέο αντικείμενο.",
        "correctCode": "Robot a = new Robot();",
        "wrongCode": "Robot a = new Robot;"
      },
      {
        "question": "Ποια δήλωση αποθηκεύει αναφορά σε Ticket;",
        "options": [
          "Ticket t = new Ticket();",
          "Ticket = t;",
          "t = new Ticket;",
          "Ticket t = ticket;"
        ],
        "answer": 0,
        "explain": "Η μεταβλητή t έχει τύπο Ticket και κρατά αναφορά σε νέο αντικείμενο.",
        "correctCode": "Ticket t = new Ticket();",
        "wrongCode": "Ticket t = new Ticket;"
      }
    ]
  },
  {
    "title": "Χρήση αντικειμένων και κλήση μεθόδων",
    "concept": "Με την τελεία καλούμε μεθόδους ή προσπελαύνουμε προσβάσιμα μέλη.",
    "rule": "Η σύνταξη κλήσης συνήθως έχει τη μορφή αναφορά.μέθοδος(ορίσματα).",
    "classes": [
      "Robot",
      "CoffeeMachine",
      "Car",
      "Student",
      "Sensor"
    ],
    "words": [
      "CALL",
      "METHOD",
      "DOT",
      "PARAMETER",
      "RETURN"
    ],
    "items": [
      {
        "question": "Πώς καλούμε τη μέθοδο move() ενός Robot r;",
        "options": [
          "move.r();",
          "r.move();",
          "Robot.move;",
          "r->move();"
        ],
        "answer": 1,
        "explain": "Η τελεία συνδέει την αναφορά με τη μέθοδο στιγμιοτύπου.",
        "correctCode": "r.move();",
        "wrongCode": "r.move;"
      },
      {
        "question": "Πώς καλούμε brew() σε μεταβλητή machine;",
        "options": [
          "machine.brew();",
          "machine.brew;",
          "brew(machine).",
          "machine->brew();"
        ],
        "answer": 0,
        "explain": "Οι παρενθέσεις είναι μέρος της κλήσης, ακόμη και χωρίς ορίσματα.",
        "correctCode": "machine.brew();",
        "wrongCode": "machine.brew;"
      },
      {
        "question": "Η accelerate(5) δέχεται…",
        "options": [
          "κανένα όρισμα",
          "ένα όρισμα",
          "πέντε ορίσματα",
          "μόνο String"
        ],
        "answer": 1,
        "explain": "Η λίστα ορισμάτων περιέχει εδώ έναν αριθμό.",
        "correctCode": "car.accelerate(5);",
        "wrongCode": "car.accelerate;"
      },
      {
        "question": "Ποια κλήση παρέχει όνομα στη μέθοδο enroll(String);",
        "options": [
          "student.enroll(\"Java\");",
          "student.enroll();",
          "Student.enroll;",
          "student.enroll = \"Java\";"
        ],
        "answer": 0,
        "explain": "Η κλήση περνά String στην παράμετρο της μεθόδου.",
        "correctCode": "student.enroll(\"Java\");",
        "wrongCode": "student.enroll;"
      },
      {
        "question": "Τι απαιτεί η μέθοδος measure() ενός αισθητήρα;",
        "options": [
          "Παρένθεση στην κλήση",
          "Το new σε κάθε κλήση",
          "Υποχρεωτικά έναν int",
          "Αντικατάσταση της κλάσης"
        ],
        "answer": 0,
        "explain": "Κλήση μεθόδου χωρίς παραμέτρους: sensor.measure().",
        "correctCode": "sensor.measure();",
        "wrongCode": "sensor.measure;"
      }
    ]
  },
  {
    "title": "Δημιουργοί και υπερφόρτωση",
    "concept": "Ο δημιουργός αρχικοποιεί αντικείμενα. Η υπερφόρτωση επιτρέπει διαφορετικές λίστες παραμέτρων.",
    "rule": "Οι δημιουργοί έχουν το όνομα της κλάσης και δεν έχουν τύπο επιστροφής.",
    "classes": [
      "Book",
      "Student",
      "Car",
      "Ticket",
      "Vector2D"
    ],
    "words": [
      "CONSTRUCTOR",
      "OVERLOAD",
      "NEW",
      "PARAMETER",
      "DEFAULT"
    ],
    "items": [
      {
        "question": "Ποια είναι σωστή υπογραφή δημιουργού της Book;",
        "options": [
          "void Book()",
          "Book()",
          "int Book()",
          "new Book()"
        ],
        "answer": 1,
        "explain": "Ο δημιουργός δεν γράφει τύπο επιστροφής.",
        "correctCode": "Book() { }",
        "wrongCode": "void Book() { }"
      },
      {
        "question": "Πώς διαφέρει ο Student(String name) από τον Student();",
        "options": [
          "Έχουν διαφορετικό όνομα",
          "Έχουν διαφορετικές παραμέτρους",
          "Δεν μπορούν να συνυπάρχουν",
          "Ο δεύτερος είναι μέθοδος"
        ],
        "answer": 1,
        "explain": "Οι διαφορετικές λίστες παραμέτρων επιτρέπουν υπερφόρτωση.",
        "correctCode": "Student(String name) { this.name = name; }",
        "wrongCode": "void Student(String name) { this.name = name; }"
      },
      {
        "question": "Ποια δημιουργία χρησιμοποιεί δημιουργό με παράμετρο String;",
        "options": [
          "new Car()",
          "new Car(\"Toyota\")",
          "Car(\"Toyota\")",
          "new Car"
        ],
        "answer": 1,
        "explain": "Επιλέγεται δημιουργός με κατάλληλη υπογραφή.",
        "correctCode": "Car car = new Car(\"Toyota\");",
        "wrongCode": "Car car = new Car;"
      },
      {
        "question": "Πότε καλείται ο δημιουργός Ticket(int id);",
        "options": [
          "Στο new Ticket(5)",
          "Στο Ticket t;",
          "Σε κάθε System.out.println",
          "Στο import"
        ],
        "answer": 0,
        "explain": "Η κλήση new Ticket(5) μεταβιβάζει το 5 στον δημιουργό.",
        "correctCode": "Ticket t = new Ticket(5);",
        "wrongCode": "Ticket t = new Ticket;"
      },
      {
        "question": "Ποια έκφραση καλεί δημιουργό Vector2D(double,double);",
        "options": [
          "new Vector2D(2.0, 3.0)",
          "new Vector2D()",
          "Vector2D(2,3)",
          "new Vector2D"
        ],
        "answer": 0,
        "explain": "Η έκφραση παρέχει δύο αριθμητικά ορίσματα συμβατά με double.",
        "correctCode": "Vector2D v = new Vector2D(2.0, 3.0);",
        "wrongCode": "Vector2D v = new Vector2D;"
      }
    ]
  },
  {
    "title": "Η λέξη-κλειδί this",
    "concept": "Το this αναφέρεται στο τρέχον αντικείμενο και βοηθά στη διάκριση πεδίων από παραμέτρους.",
    "rule": "Το this.field αναφέρεται στο πεδίο του τρέχοντος αντικειμένου.",
    "classes": [
      "Student",
      "Book",
      "Car",
      "Sensor",
      "Player"
    ],
    "words": [
      "THIS",
      "FIELD",
      "PARAMETER",
      "CONSTRUCTOR",
      "INSTANCE"
    ],
    "items": [
      {
        "question": "Τι σημαίνει το this.name = name;",
        "options": [
          "Αντιγράφει το πεδίο στην παράμετρο",
          "Θέτει το πεδίο από την παράμετρο",
          "Δημιουργεί κλάση",
          "Καλεί static μέθοδο"
        ],
        "answer": 1,
        "explain": "Αριστερά βρίσκεται το πεδίο, δεξιά η παράμετρος.",
        "correctCode": "this.name = name;",
        "wrongCode": "this = name;"
      },
      {
        "question": "Τι προσδιορίζει το this.title;",
        "options": [
          "Το πεδίο του τρέχοντος Book",
          "Μια παγκόσμια μεταβλητή",
          "Ένα πακέτο",
          "Μια νέα αναφορά"
        ],
        "answer": 0,
        "explain": "Το this δείχνει στο αντικείμενο στο οποίο εκτελείται η μέθοδος.",
        "correctCode": "this.title = title;",
        "wrongCode": "this.title == title;"
      },
      {
        "question": "Τι κάνει το this.speed = speed; στον δημιουργό Car;",
        "options": [
          "Αλλάζει την παράμετρο",
          "Αρχικοποιεί το πεδίο speed",
          "Δημιουργεί άλλο Car",
          "Καλεί accelerate()"
        ],
        "answer": 1,
        "explain": "Η τιμή της παραμέτρου αποθηκεύεται στο πεδίο του αντικειμένου.",
        "correctCode": "this.speed = speed;",
        "wrongCode": "this.speed = this;"
      },
      {
        "question": "Πού επιτρέπεται το this;",
        "options": [
          "Σε μέθοδο στιγμιοτύπου",
          "Σε οποιαδήποτε static μέθοδο",
          "Έξω από κλάση",
          "Σε όνομα αρχείου"
        ],
        "answer": 0,
        "explain": "Το this υπάρχει σε μη στατικό πλαίσιο, όπου υπάρχει τρέχον αντικείμενο.",
        "correctCode": "this.temperature = temperature;",
        "wrongCode": "this = temperature;"
      },
      {
        "question": "Τι πετυχαίνει η κλήση this(0); μέσα σε δημιουργό;",
        "options": [
          "Καλεί άλλον δημιουργό της ίδιας κλάσης",
          "Καλεί main()",
          "Επιστρέφει null",
          "Δηλώνει πεδίο"
        ],
        "answer": 0,
        "explain": "Το this(...) καλεί άλλον δημιουργό της ίδιας κλάσης και πρέπει να τηρεί τους κανόνες τοποθέτησής του.",
        "correctCode": "this(0);",
        "wrongCode": "this = (0);"
      }
    ]
  },
  {
    "title": "Ενθυλάκωση και πρόσβαση",
    "concept": "Με private περιορίζουμε την άμεση πρόσβαση στα πεδία και με public ορίζουμε το δημόσιο περιβάλλον χρήσης.",
    "rule": "Το private μέλος είναι προσβάσιμο μέσα στη δηλωτική κλάση του, όχι απευθείας από ανεξάρτητη κλάση.",
    "classes": [
      "BankAccount",
      "Student",
      "Car",
      "Sensor",
      "Ticket"
    ],
    "words": [
      "PRIVATE",
      "PUBLIC",
      "ACCESS",
      "ENCAPSULATION",
      "FIELD"
    ],
    "items": [
      {
        "question": "Ποιος τροποποιητής προστατεύει το balance από άμεση πρόσβαση άλλης κλάσης;",
        "options": [
          "public",
          "private",
          "static",
          "void"
        ],
        "answer": 1,
        "explain": "Το private περιορίζει την άμεση πρόσβαση.",
        "correctCode": "private double balance;",
        "wrongCode": "public double balance;"
      },
      {
        "question": "Πώς δηλώνουμε δημόσια μέθοδο getName();",
        "options": [
          "private String getName()",
          "public String getName()",
          "String public getName()",
          "static public = getName()"
        ],
        "answer": 1,
        "explain": "Μια public μέθοδος αποτελεί μέρος της δημόσιας διεπαφής.",
        "correctCode": "public String getName() { return name; }",
        "wrongCode": "public String getName { return name; }"
      },
      {
        "question": "Γιατί το private speed είναι χρήσιμο;",
        "options": [
          "Αποτρέπει κάθε αλλαγή",
          "Επιτρέπει ελεγχόμενη πρόσβαση μέσω μεθόδων",
          "Κάνει το speed σταθερό",
          "Καταργεί τον δημιουργό"
        ],
        "answer": 1,
        "explain": "Επιτρέπει στην κλάση να ελέγχει πώς μεταβάλλεται η κατάστασή της.",
        "correctCode": "private int speed;",
        "wrongCode": "private int speed() { }"
      },
      {
        "question": "Ποια δήλωση περιορίζει ένα πεδίο temperature;",
        "options": [
          "private double temperature;",
          "public double temperature;",
          "void temperature;",
          "temperature private double;"
        ],
        "answer": 0,
        "explain": "Η πρόσβαση καθορίζεται στον ορισμό του μέλους.",
        "correctCode": "private double temperature;",
        "wrongCode": "double private temperature;"
      },
      {
        "question": "Ποια είναι κατάλληλη δήλωση δημόσιας λειτουργίας validate();",
        "options": [
          "private void validate()",
          "public void validate()",
          "int public validate",
          "void public = validate()"
        ],
        "answer": 1,
        "explain": "Η public μέθοδος μπορεί να κληθεί από επιτρεπόμενα εξωτερικά σημεία.",
        "correctCode": "public void validate() { }",
        "wrongCode": "public validate() { }"
      }
    ]
  },
  {
    "title": "Getters και setters",
    "concept": "Οι getters επιστρέφουν τιμές πεδίων και οι setters επιτρέπουν ελεγχόμενη μεταβολή.",
    "rule": "Οι setters μπορούν να επικυρώνουν τα δεδομένα πριν την ανάθεση.",
    "classes": [
      "Student",
      "BankAccount",
      "Book",
      "Rectangle",
      "Sensor"
    ],
    "words": [
      "GETTER",
      "SETTER",
      "RETURN",
      "VALIDATION",
      "PRIVATE"
    ],
    "items": [
      {
        "question": "Ποια μέθοδος επιστρέφει το όνομα Student;",
        "options": [
          "void getName()",
          "String getName() { return name; }",
          "setName(String n)",
          "name = getName()"
        ],
        "answer": 1,
        "explain": "Ο getter επιστρέφει την τιμή του αντίστοιχου πεδίου.",
        "correctCode": "public String getName() { return name; }",
        "wrongCode": "public String getName() { return; }"
      },
      {
        "question": "Ποια μέθοδος αλλάζει ελεγχόμενα το balance;",
        "options": [
          "getBalance()",
          "setBalance(double value)",
          "balance() μόνο",
          "new balance()"
        ],
        "answer": 1,
        "explain": "Ο setter δέχεται νέα τιμή και μπορεί να την ελέγχει.",
        "correctCode": "public void setBalance(double value) { if (value >= 0) balance = value; }",
        "wrongCode": "public void setBalance(double value) { balance == value; }"
      },
      {
        "question": "Τι κάνει ο getTitle();",
        "options": [
          "Επιστρέφει τίτλο",
          "Διαγράφει το αντικείμενο",
          "Δημιουργεί Book",
          "Μεταβάλλει υποχρεωτικά το πεδίο"
        ],
        "answer": 0,
        "explain": "Ένας τυπικός getter επιστρέφει την τιμή του πεδίου.",
        "correctCode": "public String getTitle() { return title; }",
        "wrongCode": "public String getTitle() { title; }"
      },
      {
        "question": "Γιατί ο setWidth(int w) μπορεί να ελέγχει w > 0;",
        "options": [
          "Για διατήρηση έγκυρης κατάστασης",
          "Για πιο γρήγορο compile",
          "Για κλήση της main",
          "Για αλλαγή κλάσης"
        ],
        "answer": 0,
        "explain": "Η επικύρωση εμποδίζει μη αποδεκτές τιμές.",
        "correctCode": "public void setWidth(int w) { if (w > 0) width = w; }",
        "wrongCode": "public void setWidth(int w) { if (w > 0) width == w; }"
      },
      {
        "question": "Ποιος getter επιστρέφει double temperature;",
        "options": [
          "double getTemperature() { return temperature; }",
          "void getTemperature() { return temperature; }",
          "temperature getTemperature()",
          "double getTemperature;"
        ],
        "answer": 0,
        "explain": "Ο τύπος επιστροφής συμφωνεί με τον τύπο του πεδίου.",
        "correctCode": "public double getTemperature() { return temperature; }",
        "wrongCode": "public void getTemperature() { return temperature; }"
      }
    ]
  },
  {
    "title": "Εμβέλεια και χρόνος ζωής",
    "concept": "Τα τοπικά δεδομένα υπάρχουν στο πεδίο ισχύος της δήλωσής τους· τα πεδία στιγμιοτύπου ανήκουν στα αντικείμενα.",
    "rule": "Μία τοπική μεταβλητή δεν είναι ορατή έξω από το μπλοκ όπου δηλώνεται.",
    "classes": [
      "Student",
      "Car",
      "Book",
      "Player",
      "Sensor"
    ],
    "words": [
      "SCOPE",
      "LOCAL",
      "FIELD",
      "BLOCK",
      "LIFETIME"
    ],
    "items": [
      {
        "question": "Πού είναι ορατή τοπική μεταβλητή μέσα σε μέθοδο;",
        "options": [
          "Σε κάθε κλάση",
          "Στο κατάλληλο πεδίο ισχύος της δήλωσης",
          "Σε όλα τα αντικείμενα",
          "Μόνο στον δημιουργό"
        ],
        "answer": 1,
        "explain": "Η ορατότητα εξαρτάται από το μπλοκ της δήλωσης.",
        "correctCode": "int count = 0;",
        "wrongCode": "int count = \"zero\";"
      },
      {
        "question": "Το πεδίο speed μιας Car διατηρείται…",
        "options": [
          "Όσο ζει το αντίστοιχο αντικείμενο",
          "Μόνο μία γραμμή",
          "Μόνο μέσα σε if",
          "Μέχρι το τέλος της πρώτης κλήσης"
        ],
        "answer": 0,
        "explain": "Το πεδίο αποτελεί μέρος της κατάστασης του αντικειμένου.",
        "correctCode": "private int speed = 0;",
        "wrongCode": "private int speed = \"fast\";"
      },
      {
        "question": "Μπορούμε να διαβάσουμε μεταβλητή δηλωμένη μέσα σε κλειστό μπλοκ από έξω;",
        "options": [
          "Ναι, πάντοτε",
          "Όχι, αν βρίσκεται εκτός της εμβέλειάς της",
          "Μόνο αν είναι double",
          "Μόνο στο main"
        ],
        "answer": 1,
        "explain": "Η τοπική μεταβλητή είναι ορατή μέσα στο κατάλληλο μπλοκ.",
        "correctCode": "{ int pages = 5; System.out.println(pages); }",
        "wrongCode": "{ int pages = 5; } System.out.println(pages);"
      },
      {
        "question": "Πού βρίσκεται το score όταν είναι πεδίο Player;",
        "options": [
          "Στο αντικείμενο Player",
          "Στο όνομα πακέτου",
          "Στο import",
          "Σε κάθε τοπικό μπλοκ ανεξάρτητα"
        ],
        "answer": 0,
        "explain": "Κάθε αντικείμενο Player μπορεί να έχει ξεχωριστή τιμή score.",
        "correctCode": "private int score = 0;",
        "wrongCode": "private int score = \"0\";"
      },
      {
        "question": "Τι ισχύει για παράμετρο measure(int n);",
        "options": [
          "Έχει εμβέλεια μέσα στη μέθοδο",
          "Γίνεται αυτόματα πεδίο",
          "Διατηρείται σε όλες τις κλάσεις",
          "Είναι πάντα public"
        ],
        "answer": 0,
        "explain": "Οι παράμετροι χρησιμοποιούνται μέσα στο σώμα της μεθόδου.",
        "correctCode": "void measure(int n) { System.out.println(n); }",
        "wrongCode": "void measure(int n) { System.out.println(z); }"
      }
    ]
  },
  {
    "title": "toString() και @Override",
    "concept": "Η toString() παρέχει αναπαράσταση κειμένου ενός αντικειμένου. Το @Override δηλώνει ότι επαναορίζεται μέθοδος υπερκλάσης.",
    "rule": "Η σωστή υπογραφή είναι public String toString().",
    "classes": [
      "Book",
      "Student",
      "Vector2D",
      "Car",
      "Product"
    ],
    "words": [
      "TOSTRING",
      "OVERRIDE",
      "STRING",
      "OBJECT",
      "RETURN"
    ],
    "items": [
      {
        "question": "Ποιος τύπος επιστροφής απαιτείται για toString();",
        "options": [
          "void",
          "int",
          "String",
          "boolean"
        ],
        "answer": 2,
        "explain": "Η μέθοδος επιστρέφει κείμενο που περιγράφει το αντικείμενο.",
        "correctCode": "public String toString() { return title; }",
        "wrongCode": "public void toString() { return title; }"
      },
      {
        "question": "Τι δηλώνει το @Override;",
        "options": [
          "Δημιουργία νέου αντικειμένου",
          "Επαναορισμό κληρονομημένης μεθόδου",
          "Υποχρεωτικό πεδίο",
          "Μέθοδο χωρίς επιστροφή"
        ],
        "answer": 1,
        "explain": "Ο μεταγλωττιστής ελέγχει τη συμβατότητα της υπογραφής.",
        "correctCode": "@Override public String toString() { return name; }",
        "wrongCode": "@Override public int toString() { return 1; }"
      },
      {
        "question": "Τι εμφανίζει System.out.println(v) όταν υπάρχει κατάλληλη toString();",
        "options": [
          "Την επιστρεφόμενη περιγραφή",
          "Πάντα τη διεύθυνση μνήμης",
          "Μόνο την κλάση",
          "Πάντα null"
        ],
        "answer": 0,
        "explain": "Η println χρησιμοποιεί την αναπαράσταση κειμένου του αντικειμένου.",
        "correctCode": "@Override public String toString() { return x + \", \" + y; }",
        "wrongCode": "@Override public String toString() { return x + y; }"
      },
      {
        "question": "Ποια υπογραφή επαναορίζει τη toString() της Object;",
        "options": [
          "String tostring()",
          "public String toString()",
          "void toString()",
          "public int toString()"
        ],
        "answer": 1,
        "explain": "Τα πεζά/κεφαλαία στο όνομα της μεθόδου έχουν σημασία.",
        "correctCode": "public String toString() { return brand; }",
        "wrongCode": "public String tostring() { return brand; }"
      },
      {
        "question": "Ποια υλοποίηση δίνει αναγνώσιμο προϊόν;",
        "options": [
          "return name + \": \" + price;",
          "return;",
          "return 5;",
          "System.out.println(name); χωρίς return"
        ],
        "answer": 0,
        "explain": "Η toString() πρέπει να επιστρέφει String και όχι μόνο να τυπώνει κείμενο.",
        "correctCode": "public String toString() { return name + \": \" + price; }",
        "wrongCode": "public String toString() { System.out.println(name); }"
      }
    ]
  },
  {
    "title": "Αναφορές και αντιγραφή",
    "concept": "Οι μεταβλητές αντικειμένων διατηρούν αναφορές. Η αντιγραφή αναφοράς δεν δημιουργεί νέο αντικείμενο.",
    "rule": "Για ανεξάρτητο αντικείμενο απαιτείται κατάλληλη κατασκευή αντιγράφου ή άλλη στρατηγική αντιγραφής.",
    "classes": [
      "Book",
      "Student",
      "Vector2D",
      "Player",
      "Car"
    ],
    "words": [
      "REFERENCE",
      "ALIAS",
      "COPY",
      "NEW",
      "OBJECT"
    ],
    "items": [
      {
        "question": "Τι κάνει η ανάθεση Book b = a; όταν a δείχνει σε Book;",
        "options": [
          "Φτιάχνει νέο Book",
          "Αντιγράφει την αναφορά",
          "Κλωνοποιεί όλα τα πεδία",
          "Διαγράφει το a"
        ],
        "answer": 1,
        "explain": "Μετά την ανάθεση και οι δύο μεταβλητές αναφέρονται στο ίδιο αντικείμενο.",
        "correctCode": "Book b = a;",
        "wrongCode": "Book b = new a;"
      },
      {
        "question": "Τι συμβαίνει αν b = a και μεταβληθεί το αντικείμενο μέσω b;",
        "options": [
          "Το a αναφέρεται στο ίδιο αλλαγμένο αντικείμενο",
          "Δημιουργούνται αυτόματα δύο αντίγραφα",
          "Το a γίνεται null",
          "Δεν επιτρέπεται η αλλαγή"
        ],
        "answer": 0,
        "explain": "Οι δύο αναφορές είναι ψευδώνυμα για το ίδιο αντικείμενο.",
        "correctCode": "Student b = a;",
        "wrongCode": "Student b = new a;"
      },
      {
        "question": "Τι επιδιώκει η new Vector2D(original), εφόσον υπάρχει δημιουργός αντιγραφής;",
        "options": [
          "Ανεξάρτητο αντικείμενο με αντιγραμμένες τιμές",
          "Μια δεύτερη αναφορά στο ίδιο αντικείμενο",
          "Αλλαγή τύπου",
          "Αφαίρεση x"
        ],
        "answer": 0,
        "explain": "Ο δημιουργός αντιγραφής κατασκευάζει νέο αντικείμενο από τις τιμές άλλου.",
        "correctCode": "Vector2D copy = new Vector2D(original);",
        "wrongCode": "Vector2D copy = original();"
      },
      {
        "question": "Πότε δύο μεταβλητές Player είναι aliases;",
        "options": [
          "Όταν αναφέρονται στο ίδιο αντικείμενο",
          "Όταν έχουν ίδιο όνομα",
          "Όταν έχουν ίδιο score μόνο",
          "Όταν είναι private"
        ],
        "answer": 0,
        "explain": "Οι aliases παραπέμπουν στην ίδια ταυτότητα αντικειμένου.",
        "correctCode": "Player other = player;",
        "wrongCode": "Player other = new player;"
      },
      {
        "question": "Τι εξασφαλίζει η new Car(source), αν έχει οριστεί σωστός δημιουργός αντιγραφής;",
        "options": [
          "Δύο αναφορές σε ένα αντικείμενο",
          "Νέο αντικείμενο με αντιγραμμένη κατάσταση",
          "Αυτόματα βαθύ αντίγραφο κάθε εσωτερικού αντικειμένου",
          "Μετατροπή σε String"
        ],
        "answer": 1,
        "explain": "Ο δημιουργός αντιγραφής δημιουργεί νέο αντικείμενο. Η βαθιά αντιγραφή εξαρτάται από την υλοποίηση.",
        "correctCode": "Car copy = new Car(source);",
        "wrongCode": "Car copy = Car(source);"
      }
    ]
  },
  {
    "title": "Συνεργασία διαφορετικών κλάσεων",
    "concept": "Ένα αντικείμενο μπορεί να διατηρεί αναφορά σε άλλο αντικείμενο ως πεδίο, όπως Player.position τύπου Vector2D.",
    "rule": "Η σύνθεση επιτρέπει συνεργασία αντικειμένων, χωρίς να απαιτεί κληρονομικότητα.",
    "classes": [
      "Player",
      "Vector2D",
      "Order",
      "Product",
      "Course"
    ],
    "words": [
      "COMPOSITION",
      "OBJECT",
      "FIELD",
      "VECTOR",
      "REFERENCE"
    ],
    "items": [
      {
        "question": "Τι τύπο μπορεί να έχει το πεδίο position της Player;",
        "options": [
          "Vector2D",
          "void",
          "new",
          "return"
        ],
        "answer": 0,
        "explain": "Το position μπορεί να αναφέρεται σε αντικείμενο Vector2D.",
        "correctCode": "private Vector2D position;",
        "wrongCode": "private new position;"
      },
      {
        "question": "Πώς δημιουργούμε διάνυσμα με x=2, y=3, αν υπάρχει αντίστοιχος δημιουργός;",
        "options": [
          "new Vector2D(2, 3)",
          "Vector2D(2,3)",
          "new Vector2D;",
          "Vector2D = 2,3"
        ],
        "answer": 0,
        "explain": "Τα δύο ορίσματα περνούν στον δημιουργό της Vector2D.",
        "correctCode": "Vector2D pos = new Vector2D(2, 3);",
        "wrongCode": "Vector2D pos = Vector2D(2, 3);"
      },
      {
        "question": "Τι τύπο μπορεί να έχει το πεδίο product σε Order;",
        "options": [
          "Product",
          "void",
          "import",
          "double()"
        ],
        "answer": 0,
        "explain": "Ένα αντικείμενο παραγγελίας μπορεί να αναφέρεται σε αντικείμενο προϊόντος.",
        "correctCode": "private Product product;",
        "wrongCode": "private new Product;"
      },
      {
        "question": "Ποια δήλωση συνδέει Player με Vector2D μέσα στον δημιουργό Player;",
        "options": [
          "this.position = position;",
          "this = position;",
          "new position;",
          "position == this;"
        ],
        "answer": 0,
        "explain": "Η παράμετρος τύπου Vector2D μπορεί να αποθηκευτεί στο πεδίο του Player.",
        "correctCode": "this.position = position;",
        "wrongCode": "this.position == position;"
      },
      {
        "question": "Πώς αποθηκεύεται αναφορά σε Student σε κλάση Course;",
        "options": [
          "private Student student;",
          "private void student;",
          "new Student student;",
          "private class student;"
        ],
        "answer": 0,
        "explain": "Ένα πεδίο μπορεί να έχει ως τύπο άλλη κλάση.",
        "correctCode": "private Student student;",
        "wrongCode": "private new student;"
      }
    ]
  },
  {
    "title": "Σύγκριση == και equals()",
    "concept": "Το == συγκρίνει αναφορές αντικειμένων· η equals() μπορεί να υλοποιεί σύγκριση τιμών.",
    "rule": "Η Object.equals() από προεπιλογή συγκρίνει ταυτότητα· απαιτείται επαναορισμός για ισότητα βάσει περιεχομένου.",
    "classes": [
      "Book",
      "Student",
      "Vector2D",
      "Player",
      "Product"
    ],
    "words": [
      "EQUALS",
      "IDENTITY",
      "OBJECT",
      "BOOLEAN",
      "REFERENCE"
    ],
    "items": [
      {
        "question": "Τι συγκρίνει το a == b για δύο αναφορές Book;",
        "options": [
          "Το ίδιο αντικείμενο",
          "Τον τίτλο τους πάντα",
          "Τους αριθμούς σελίδων",
          "Τα hash των βιβλίων"
        ],
        "answer": 0,
        "explain": "Ο == ελέγχει αν οι αναφορές είναι ίδιες.",
        "correctCode": "boolean same = (a == b);",
        "wrongCode": "boolean same = (a = b);"
      },
      {
        "question": "Τι χρειάζεται για να συγκρίνουμε Student με βάση name και id;",
        "options": [
          "Κατάλληλο equals()",
          "Μόνο ==",
          "Μόνο toString()",
          "Ένα private main"
        ],
        "answer": 0,
        "explain": "Η equals() μπορεί να ορίζει ισότητα τιμών όταν επαναοριστεί σωστά.",
        "correctCode": "boolean equal = a.equals(b);",
        "wrongCode": "boolean equal = a.equal(b);"
      },
      {
        "question": "Τι σημαίνει a.equals(b) όταν η Vector2D έχει σωστό equals για x,y;",
        "options": [
          "Ίδιες τιμές x,y",
          "Ίδια υποχρεωτικά αναφορά",
          "Ίδιο String μόνο",
          "Ότι a και b είναι null"
        ],
        "answer": 0,
        "explain": "Διαφορετικά διανύσματα μπορούν να είναι ίσα ως προς τις συντεταγμένες.",
        "correctCode": "boolean equal = a.equals(b);",
        "wrongCode": "boolean equal = a == b.equals();"
      },
      {
        "question": "Τι πρέπει να ελέγχουμε πριν το casting μέσα στην equals(Object obj);",
        "options": [
          "Τον κατάλληλο τύπο του obj",
          "Μόνο το score",
          "Το χρώμα της κλάσης",
          "Πάντα το hashCode() πρώτο"
        ],
        "answer": 0,
        "explain": "Ο έλεγχος τύπου αποτρέπει μη έγκυρο casting.",
        "correctCode": "if (!(obj instanceof Player)) return false;",
        "wrongCode": "Player p = (Player) obj; // χωρίς έλεγχο τύπου"
      },
      {
        "question": "Αν δύο Product έχουν ίδια πεδία αλλά δημιουργήθηκαν με δύο new, τι ισχύει;",
        "options": [
          "Το == είναι υποχρεωτικά true",
          "Το == είναι false, ενώ η equals μπορεί να είναι true",
          "Η equals είναι υποχρεωτικά false",
          "Έχουν πάντα ίδια αναφορά"
        ],
        "answer": 1,
        "explain": "Δύο ανεξάρτητα αντικείμενα έχουν διαφορετική ταυτότητα αλλά μπορεί να είναι ίσα ως προς την τιμή.",
        "correctCode": "boolean equal = a.equals(b);",
        "wrongCode": "boolean equal = a == b; // σύγκριση περιεχομένου"
      }
    ]
  },
  {
    "title": "hashCode() και equals()",
    "concept": "Αν δύο αντικείμενα είναι ίσα κατά equals(), πρέπει να επιστρέφουν ίδιο hashCode().",
    "rule": "Το αντίστροφο δεν ισχύει: ίσα hash δεν εγγυώνται equals().",
    "classes": [
      "Book",
      "Student",
      "Vector2D",
      "Product",
      "Player"
    ],
    "words": [
      "HASHCODE",
      "EQUALS",
      "CONTRACT",
      "OBJECT",
      "HASHSET"
    ],
    "items": [
      {
        "question": "Αν a.equals(b) είναι true, τι ισχύει για hashCode();",
        "options": [
          "Πρέπει να είναι ίδιο για a,b",
          "Πρέπει να διαφέρει",
          "Πρέπει να είναι μηδέν",
          "Δεν επιτρέπεται hashCode()"
        ],
        "answer": 0,
        "explain": "Η σύμβαση απαιτεί ίδιο hash για ίσα αντικείμενα.",
        "correctCode": "int h = a.hashCode();",
        "wrongCode": "int h = a.hashcode();"
      },
      {
        "question": "Τι σημαίνει ίδιο hashCode() για δύο Student;",
        "options": [
          "Είναι πάντοτε ίσοι",
          "Μπορεί να είναι ίσοι ή διαφορετικοί",
          "Είναι ίδια αναφορά",
          "Έχουν ίδιο όνομα υποχρεωτικά"
        ],
        "answer": 1,
        "explain": "Διαφορετικά αντικείμενα μπορεί να έχουν σύγκρουση hash.",
        "correctCode": "boolean equal = a.equals(b);",
        "wrongCode": "boolean equal = a.hashCode() == b.hashCode(); // δεν αρκεί"
      },
      {
        "question": "Ποια υλοποίηση συνδυάζει x και y απλά και με συνέπεια;",
        "options": [
          "Objects.hash(x, y)",
          "System.out.println(x)",
          "return 0.5;",
          "return \"vector\";"
        ],
        "answer": 0,
        "explain": "Η Objects.hash μπορεί να χρησιμοποιηθεί, με κόστος απόδοσης, για συνδυασμό πεδίων.",
        "correctCode": "return java.util.Objects.hash(x, y);",
        "wrongCode": "return \"hash\";"
      },
      {
        "question": "Τι είναι σημαντικό όταν αλλάζουμε equals σε Product;",
        "options": [
          "Συνεπής υλοποίηση hashCode",
          "Διαγραφή της toString",
          "Μετατροπή όλων των πεδίων σε static",
          "Χρήση μόνο =="
        ],
        "answer": 0,
        "explain": "Οι συλλογές με hashing βασίζονται στη συνέπεια equals/hashCode.",
        "correctCode": "@Override public int hashCode() { return java.util.Objects.hash(id); }",
        "wrongCode": "@Override public String hashCode() { return id; }"
      },
      {
        "question": "Γιατί mutable πεδία μέσα σε hashCode είναι επικίνδυνα σε HashSet;",
        "options": [
          "Αν αλλάξουν, μπορεί να δυσκολέψει η εύρεση του αντικειμένου",
          "Απαγορεύεται κάθε int",
          "Η Java κλείνει",
          "Η equals διαγράφεται"
        ],
        "answer": 0,
        "explain": "Η αλλαγή πεδίων που επηρεάζουν το hash μπορεί να καταστήσει προβληματική την αναζήτηση.",
        "correctCode": "int h = player.hashCode();",
        "wrongCode": "String h = player.hashCode();"
      }
    ]
  },
  {
    "title": "Ολοκληρωμένες ασκήσεις με κλάσεις",
    "concept": "Συνδυάζουμε κλάσεις, ενθυλάκωση, δημιουργούς, αναφορές, equals/hashCode και αναγνώσιμο κώδικα.",
    "rule": "Ένα σωστό πρόγραμμα τεκμηριώνει τις σχέσεις των αντικειμένων και αποφεύγει ανεξέλεγκτη πρόσβαση στην κατάστασή τους.",
    "classes": [
      "Player",
      "Vector2D",
      "Book",
      "Student",
      "BankAccount"
    ],
    "words": [
      "CLASS",
      "OBJECT",
      "METHOD",
      "EQUALS",
      "HASHCODE"
    ],
    "items": [
      {
        "question": "Ποιο πεδίο επιτρέπει στον Player να έχει θέση;",
        "options": [
          "private Vector2D position;",
          "private void position;",
          "new position;",
          "position = class;"
        ],
        "answer": 0,
        "explain": "Η σύνθεση επιτρέπει αναφορά σε αντικείμενο άλλης κλάσης.",
        "correctCode": "private Vector2D position;",
        "wrongCode": "private void position;"
      },
      {
        "question": "Πώς αρχικοποιούμε Player με θέση σε έναν κατάλληλο δημιουργό;",
        "options": [
          "this.position = position;",
          "this.position == position;",
          "this = position;",
          "position.new();"
        ],
        "answer": 0,
        "explain": "Το πεδίο του Player λαμβάνει την αναφορά Vector2D της παραμέτρου.",
        "correctCode": "this.position = position;",
        "wrongCode": "this.position == position;"
      },
      {
        "question": "Τι είναι σωστό για δύο βιβλία με ίσο τίτλο;",
        "options": [
          "Μπορεί η equals να τα συγκρίνει βάσει τίτλου",
          "Ο == είναι πάντα true",
          "Είναι υποχρεωτικά το ίδιο αντικείμενο",
          "Απαγορεύεται η σύγκριση"
        ],
        "answer": 0,
        "explain": "Ο επαναορισμός equals μπορεί να καθορίσει λογική ισότητα.",
        "correctCode": "boolean equal = first.equals(second);",
        "wrongCode": "boolean equal = first == second; // όχι κατ’ ανάγκη ίδιο περιεχόμενο"
      },
      {
        "question": "Πώς περιορίζουμε την άμεση αλλαγή studentId;",
        "options": [
          "private int studentId;",
          "public int studentId;",
          "void studentId;",
          "import studentId;"
        ],
        "answer": 0,
        "explain": "Το private πεδίο προστατεύει την εσωτερική κατάσταση.",
        "correctCode": "private int studentId;",
        "wrongCode": "public int studentId;"
      },
      {
        "question": "Πώς ενημερώνουμε το balance με ελεγμένη μέθοδο;",
        "options": [
          "account.deposit(50);",
          "account.balance = -50;",
          "account.new deposit();",
          "deposit.account();"
        ],
        "answer": 0,
        "explain": "Η δημόσια μέθοδος μπορεί να επιβάλλει επιχειρησιακούς κανόνες.",
        "correctCode": "account.deposit(50);",
        "wrongCode": "account.deposit;"
      }
    ]
  }
];