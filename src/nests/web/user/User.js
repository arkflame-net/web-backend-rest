class User {
    fields = {};

    setId(id) {
        this.fields._id = id;
    }

    setName(name) {
        this.fields.name = name;
    }

    setEmail(email) {
        this.fields.email = email;
    }

    setPictureUrl(pictureUrl) {
        this.fields.pictureUrl = pictureUrl;
    }

    setBiography(biography) {
        this.fields.biography = biography;
    }

    setBannerUrl(bannerUrl) {
        this.fields.bannerUrl = bannerUrl;
    }

    setLinks(links) {
        this.fields.links = links
    }

    setComments(comments) {
        this.fields.comments = comments;
    }

    setStats(stats) {
        this.fields.stats = stats;
    }

    setPassword(password) {
        this.fields.password = password;
    }

    toJson() {
        return json;
    }
}