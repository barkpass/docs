<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

<script>
export default {
  render: () => {},

  mounted() {
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
