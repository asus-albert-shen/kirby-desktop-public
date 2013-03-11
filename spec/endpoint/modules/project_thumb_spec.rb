require 'spec_helper'

describe "The project_thumb module" do
  %w(/).each do |path|
    full_path = "#{Capybara.app_host}#{path}"
    context "on path #{full_path}" do

      before(:each) do
        visit full_path
      end

      it { should have_selector('ul.projects li') }

    end
  end
end
