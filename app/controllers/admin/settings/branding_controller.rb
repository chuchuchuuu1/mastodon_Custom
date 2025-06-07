# frozen_string_literal: true

class Admin::Settings::BrandingController < Admin::SettingsController
  private

  def after_update_redirect_path
    admin_settings_branding_path
  end

  # === 추가: 강한 파라미터 설정 ===
  def instance_params
    params.require(:instance).permit(
      :header_logo,
      :favicon,
      :background_image,
      :primary_color,
      :accent_color,
      :background_color,
      :theme,
      :description,
      :custom_css # <<== 이 줄이 중요!
    )
  end
end
