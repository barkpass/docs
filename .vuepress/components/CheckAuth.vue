<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

<script>
export default {
  render: () => {},

  mounted() {
    // Redirect to FAQ unless we're in a login cycle
    if (!window.location.hash.includes('_token')) {
      window.location.href = '/guides/faq/';
      return;
    }

    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }
}
</script>
