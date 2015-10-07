module LinkHelper

  def wrap_link_if(*args, &block)
    condition    = args[0]
    if block_given?
      content = capture(&block)
      options      = args[1] || {}
      html_options = args[2]
    else
      content = args[1]
      options = args[2] || {}
      html_options = args[3]
    end

    if condition
      link_to(content, options, html_options)
    else
      content
    end
  end

  def wrap_link_unless(*args, &block)
    wrap_link_if(*[!args.shift, *args], &block)
  end

end

