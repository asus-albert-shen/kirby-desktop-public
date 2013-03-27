# HTML Transformations go here
# comment to trigger rebuild

$("/html") {
  rewrite_links()
  absolutize_srcs()

  add_assets()

  @import sections/form.ts
  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}

