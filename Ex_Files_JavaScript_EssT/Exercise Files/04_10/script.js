function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
}

var course01 = new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0);

console.log(course01);
