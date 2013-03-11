require 'spec_helper'

describe "The header module" do
  %w(/ /underarmor/mobile).each do |path|
    full_path = "#{Capybara.app_host}#{path}"
    context "on path #{full_path}" do

      before(:each) do
        visit full_path
      end

      it { should have_selector('header.page') }

    end
  end
end
