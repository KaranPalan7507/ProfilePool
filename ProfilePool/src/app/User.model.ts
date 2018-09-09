export class UserModel {
    name: string;
    email: string;
    fbProfile: string;
    linkdinProfile: string;
    twitterProfile: string;
    constructor(data: any) {
        this.name = data.name;
        this.email = data.email;
        this.fbProfile = data.fbProfile;
        this.twitterProfile = data.twitterProfile;
        this.linkdinProfile = data.linkdinProfile;
    }
}