import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type ProjectCategory = {
    #residential;
    #commercial;
    #industrial;
  };

  type Project = {
    title : Text;
    description : Text;
    category : ProjectCategory;
    imageUrl : Text;
  };

  module Project {
    public func compare(p1 : Project, p2 : Project) : Order.Order {
      switch (Text.compare(p1.title, p2.title)) {
        case (#equal) { Text.compare(p1.description, p2.description) };
        case (order) { order };
      };
    };

    public func isCategory(p : Project, cat : ProjectCategory) : Bool {
      p.category == cat;
    };
  };

  type Testimonial = {
    author : Text;
    roleOrCompany : Text;
    quote : Text;
  };

  module Testimonial {
    public func compare(t1 : Testimonial, t2 : Testimonial) : Order.Order {
      switch (Text.compare(t1.author, t2.author)) {
        case (#equal) { Text.compare(t1.roleOrCompany, t2.roleOrCompany) };
        case (order) { order };
      };
    };
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(cs1 : ContactSubmission, cs2 : ContactSubmission) : Order.Order {
      switch (Int.compare(cs1.timestamp, cs2.timestamp)) {
        case (#equal) { Text.compare(cs1.name, cs2.name) };
        case (order) { order };
      };
    };
  };

  let projects = Map.empty<Text, Project>();
  let testimonials = Map.empty<Text, Testimonial>();
  let contactSubmissions = Map.empty<Time.Time, ContactSubmission>();

  // Initialize with sample data
  public shared ({ caller }) func initializeData() : async () {
    if (projects.size() > 0 or testimonials.size() > 0) {
      Runtime.trap("Already initialized");
    };

    // Add sample projects
    let sampleProjects : [(Text, Project)] = [
      (
        "Modern Villa",
        {
          title = "Modern Villa";
          description = "A contemporary residential project with open spaces and sustainable materials.";
          category = #residential;
          imageUrl = "https://example.com/villa.jpg";
        },
      ),
      (
        "City Office Complex",
        {
          title = "City Office Complex";
          description = "Commercial office spaces in the heart of the city with smart technologies.";
          category = #commercial;
          imageUrl = "https://example.com/office.jpg";
        },
      ),
      (
        "Eco Apartments",
        {
          title = "Eco Apartments";
          description = "Residential apartments focused on energy efficiency.";
          category = #residential;
          imageUrl = "https://example.com/apartments.jpg";
        },
      ),
      (
        "Tech Park",
        {
          title = "Tech Park";
          description = "An industrial park designed for tech startups and manufacturing.";
          category = #industrial;
          imageUrl = "https://example.com/techpark.jpg";
        },
      ),
      (
        "Shopping Mall",
        {
          title = "Shopping Mall";
          description = "A commercial center with retail stores and entertainment facilities.";
          category = #commercial;
          imageUrl = "https://example.com/mall.jpg";
        },
      ),
      (
        "Manufacturing Plant",
        {
          title = "Manufacturing Plant";
          description = "An industrial facility for large-scale manufacturing operations.";
          category = #industrial;
          imageUrl = "https://example.com/plant.jpg";
        },
      ),
    ];

    for ((title, project) in sampleProjects.values()) {
      projects.add(title, project);
    };

    // Add sample testimonials
    let sampleTestimonials : [(Text, Testimonial)] = [
      (
        "John Doe",
        {
          author = "John Doe";
          roleOrCompany = "Homeowner";
          quote = "They turned our dream home into reality. Excellent service and design!";
        },
      ),
      (
        "Jane Smith",
        {
          author = "Jane Smith";
          roleOrCompany = "CEO, TechCorp";
          quote = "Our new office space attracts top talent and enhances productivity.";
        },
      ),
      (
        "Emily Brown",
        {
          author = "Emily Brown";
          roleOrCompany = "Real Estate Developer";
          quote = "We consistently choose them for their innovative approach and reliability.";
        },
      ),
      (
        "Michael Lee",
        {
          author = "Michael Lee";
          roleOrCompany = "Plant Manager";
          quote = "Design implementations have improved our workflow and efficiency.";
        },
      ),
    ];

    for ((author, testimonial) in sampleTestimonials.values()) {
      testimonials.add(author, testimonial);
    };
  };

  // Public functions
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp;
    };
    contactSubmissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray().sort();
  };

  public query ({ caller }) func getProjectsByCategory(category : ProjectCategory) : async [Project] {
    let allProjects = projects.values().toArray();
    allProjects.filter(func(p) { Project.isCategory(p, category) });
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };
};
