class crmPage {

email_templates_account : string
text_template_account : string
phone_statuses_account : string
social_hashtags_account : string
social_tags : string
social_posts : string
social_queue : string
social_queue_requests : string
social_accounts_account : string
options_account: string





constructor(){

    this.email_templates_account = "//span[@class='title' and contains(text(),'Email Templates')]"
    this.text_template_account = "//span[@class='title' and contains(text(),'Text Templates')]"
    this.phone_statuses_account = "//span[@class='title' and contains(text(),'Phone Statuses')]"
    this.social_hashtags_account = "//span[@class='title' and contains(text(),'Social Hashtags')]"
    this.social_tags = "//span[@class='title' and contains(text(),'Social Tags')]"
    this.social_posts = "//span[@class='title' and contains(text(),'Social Posts')]"
    this.social_queue = "//span[@class='title' and contains(text(),'Social Queue')]"
    this.social_queue_requests = "//span[@class='title' and contains(text(),'Social Queue Requests')]"
    this.social_accounts_account = "//span[@class='title' and contains(text(),'Social Accounts')]"
    this.options_account = "//span[@class='title' and contains(text(),'Options')]"


}
}
export default crmPage