task :default => [:test]

task :test do
  ruby "test/unittest.rb"
end

task :compile do

  #clobber the directory.
  FileUtils::rm_rf('dist/')
  FileUtils::mkdir('dist/')
  #copy over existing directory structure
  FileUtils::cp_r('index.html', 'dist/index.html')
  FileUtils::cp_r('lib', 'dist/lib/')
  FileUtils::cp_r('js', 'dist/js/')
  FileUtils::cp_r('assets', 'dist/assets/')
  FileUtils::cp_r('css', 'dist/css/')

  index = File.open('dist/index.html', 'a')

  #compile templates
  templates = Dir.glob('templates/*').select { |fn| File.file?(fn) }

  
  #append templates to compiled index
  templates.each do |template|
    file = File.open(template, 'r')
    contents = file.read
    index.puts "<script id='template-#{File.basename(template, '.hbs')}' type='text/x-handlebars-template'>
                #{contents}
                </script>"
  end

  #components
  components = Dir.glob('templates/components/*').select { |fn| File.file?(fn) }

  #append templates to compiled index
  components.each do |component|
    file = File.open(component, 'r')
    contents = file.read
    index.puts "<script id='component-#{File.basename(component, '.hbs')}' type='text/x-handlebars-template'>
                #{contents}
                </script>"
  end
end


