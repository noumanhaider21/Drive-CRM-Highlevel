declare namespace Cypress {
    interface Chainable {


        loginUI(username, password);
        emailTemplates();
        textTemplates();
        phoneStatuses();
        socialHashtags();
        socialTags();
        socialPosts();
        socialQueue();
        socialQueueRequests();
        socialAccounts();
        options();

    }}