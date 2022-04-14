class BasicRoutingService {
  currentPage = 'Home';
  lastPage = 'Home';

  allPagesObject: any = {
    home: 0,
    about: 1,
    contact: 2,
  };
  pageToShow = [true, false, false];

  SwitchPage(page: string) {
    this.lastPage = this.currentPage;
    this.currentPage = page;
    let n = this.allPagesObject[page];

    for (let i = 0; i < this.pageToShow.length; i++) {
      if (i === n) {
        this.pageToShow[i] = true;
        continue;
      }
      this.pageToShow[i] = false;
    }
  }
}

export { BasicRoutingService };
