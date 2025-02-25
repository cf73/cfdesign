---
id: 4b7514ad-ea6d-41bd-9bb0-3f7efd39058e
blueprint: project
title: 'Midland Industries'
main_image: midland0.png
summary:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'For '
      -
        type: text
        marks:
          -
            type: bold
        text: 'Midland Industries'
      -
        type: text
        text: ', America’s largest industrial supplies distributor, I led a holistic redesign of their online presence and e-commerce platform, driving sales, customer acquisition, and user satisfaction.'
role: 'Lead UX/UI and Product Designer'
team: 'Intevity (agency)'
updated_by: e8d38b19-bde9-4962-b28e-344068bc855b
updated_at: 1740454124
tags:
  - b2b
  - ecommerce
  - identity
  - testing
  - uxui
  - strategy
  - voice-of-customer
coming_soon: false
content_area:
  -
    id: m7jh2nwv
    image: midland0.png
    type: image
    enabled: true
  -
    id: m7jh3qm9
    text:
      -
        type: paragraph
        content:
          -
            type: text
            text: "The new homepage design updated Midland's public face with a cleaner visual language, a reorganized and condensed header, and multiple points of entry for various customer use-cases, helping drive demand and repeat purchases."
    type: text
    enabled: true
  -
    id: m7jh8szw
    image: midland2.png
    type: image
    enabled: true
  -
    id: m7jh94og
    text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'The header partially collapses on scroll, saving space. Popular product categories are surfaced visually in intuitive cards, building muscle memory for repeat customers. Dedicated space is given to new product announcements.'
    type: text
    enabled: true
  -
    id: m7jhm32f
    image: midland4.png
    type: image
    enabled: true
  -
    id: m7jhmfzp
    text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'I interviewed 15 Midland customers, ranging from solo small business owners to dropshippers using Midland to fulfill orders for their own customers, and used the insights gleaned to drive substantial improvements to the shopping platform. Specifically, the '
          -
            type: text
            marks:
              -
                type: bold
            text: 'My Account'
          -
            type: text
            text: ' experience was significantly overhauled.'
    type: text
    enabled: true
  -
    id: m7jtjzuv
    image: midland5.png
    type: image
    enabled: true
  -
    id: m7jtke7t
    text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'The redesigned '
          -
            type: text
            marks:
              -
                type: bold
            text: Order
          -
            type: text
            text: ' page is much cleaner, affording users a streamlined experience when double checking Purchase Orders and making updates.'
    type: text
    enabled: true
  -
    id: m7jto6ou
    image: midland6.png
    type: image
    enabled: true
  -
    id: m7jtodhu
    text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Items are listed in a compact yet scanable grid, with some powerful filtering options built into the UI, such as being able to group items by shipment.'
    type: text
    enabled: true
  -
    id: m7jviuvy
    image: midland-cart-after.png
    type: image
    enabled: true
  -
    id: m7jvj62v
    text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'A totally redesigned shopping cart experience brought clarity, density, and increased functionality to the previous design (see '
          -
            type: text
            marks:
              -
                type: bold
            text: 'deep dive'
          -
            type: text
            text: ' section below).'
    type: text
    enabled: true
  -
    id: m7jmj1k7
    title: 'Visual hierarchy'
    before:
      -
        id: m7jmj730
        before_image: before-5.png
        before_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: "The existing 'My Account' experience lacked clear visual hierarchy, making initial comprehension and navigability challenging. Everything sat on a glaring white background (1), while the a confusing gray box of links (2) appeared to be a child element of the page (see 'Architectural Issues', below)."
        type: before
        enabled: true
    after:
      -
        id: m7jmjuwi
        after_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'In my redesign, a soft grey background introduces a subtle shift in visual depth (1), separating the menu on the left from the ‘card’ of content (2) on the right, and restoring a parent > child relationship. This gentle visual hierarchy cue makes navigating the ‘My Account’ experience more intuitive, while lending a softer, cleaner presentation to the site’s visual language as a whole.'
        type: after
        enabled: true
        after_image: after-5.png
    type: before_and_after
    enabled: true
  -
    id: m7jd0kyd
    before:
      -
        id: m7jd0mj0
        before_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'The confusing gray box of links (1) appears to belong to the current ‘Order History’ page (2). In fact, it should be a sub-navigation of My Account, with the first item active.'
        type: before
        enabled: true
        before_image: before-1.png
    after:
      -
        id: m7jegb0o
        after_image: after-1.png
        after_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'In the redesign, the page is now relabeled ‘My Account’ (1), making sense of the left-rail sub-navigation (2), which now shows the active item, ‘Orders’. The main content area of the page also gains a title (3).'
        type: after
        enabled: true
    type: before_and_after
    enabled: true
    title: 'Architectural issues'
  -
    id: m7ji7kmv
    title: 'Search and filter issues'
    before:
      -
        id: m7ji8bcj
        before_image: before-2.png
        before_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Different filter states of ‘Orders’ are presented as separate pages: ‘Order History’, ‘Open Orders’, ‘Saved Orders’ (1). This makes it impossible to search or filter across all simultaneously (2).'
        type: before
        enabled: true
    after:
      -
        id: m7ji8u5e
        after_image: after-2.png
        after_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: '‘Order History’, ‘Open Orders’ and ‘Saved Orders’ from the old subnav are combined into the new single ‘Orders’ tab (1) as faceted sub-navigation (2). This allows for additional nuance such as ‘Partially Fulfilled’ status to be surfaced quickly, while also making search and filter possible from a single location (3).'
        type: after
        enabled: true
    type: before_and_after
    enabled: true
  -
    id: m7jlzg06
    title: Scanability
    before:
      -
        id: m7jm08ei
        before_image: before-3.png
        before_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: "In the old design, scanning the contents of the navigation 'box' (1) is difficult due to the number of items and lack of ‘chunking’ into groups."
        type: before
        enabled: true
    after:
      -
        id: m7jm15q9
        after_image: after-3.png
        after_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'In my redesign, the new sub-navigation (1) introduces visual segmentation and a slight reordering for easier comprehension and scannability.'
        type: after
        enabled: true
    type: before_and_after
    enabled: true
  -
    id: m7jma25e
    title: 'Turning the Tables'
    before:
      -
        id: m7jmac5u
        before_image: before-4.png
        before_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'The table (1) scrolls horizontally slightly without additional functionality, hiding information and creating visual mess.'
        type: before
        enabled: true
    after:
      -
        id: m7jmch5x
        after_image: after-4.png
        after_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'The table (1) now no-longer scrolls horizontally, and introduces an additional ‘Status’ column, facilitating faster user workflows. Usability is improved.'
        type: after
        enabled: true
    type: before_and_after
    enabled: false
  -
    id: m7jvf0km
    title: 'Shopping Cart UX/UI'
    before:
      -
        id: m7jvfasj
        before_image: midland-cart-before.png
        before_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'The cart design on the existing site was a functional yet very messy table-based design, resulting in visual sprawl that made it difficult to determine cart contents for larger orders.'
        type: before
        enabled: true
    after:
      -
        id: m7jvfva0
        after_image: midland-cart-after.png
        after_description:
          -
            type: paragraph
            content:
              -
                type: text
                text: "The redesigned cart is cleaner, more compact, and yet also more functional via some innovative UX. Certain items carry special bulk pricing for certain customers. These customers will automatically see the UI shown on the second line item, allowing them to specify the bulk unit. Selecting 'Item' seamlessly swaps the SKU for the non-discounted version, without the customer having to search for this smaller-quantity SKU manually."
        type: after
        enabled: true
    type: before_and_after
    enabled: true
before_and_after: true
b_a_blurb:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Midland had an existing website which my team was tasked to redesign, with the strategic goals of driving sales, increasing cart size, and encouraging existing customers to migrate to the new platform Midland had selected.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Below are some examples of areas of design focus, showcasing issues with the existing site and the solutions. Use the tabs to compare '
      -
        type: text
        marks:
          -
            type: bold
        text: before
      -
        type: text
        text: ' and '
      -
        type: text
        marks:
          -
            type: bold
        text: after
      -
        type: text
        text: .
---
