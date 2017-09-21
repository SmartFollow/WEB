<?php
$page_title = "Création d'une évaluation";
?>

<div class="row">
	<div class="col-md-6">
		<div class="panel panel-evaluation-setting">
			<div class="panel-heading">
				<h3 class="panel-title">Classe concernée</h3>
			</div>
			<div class="panel-body">
				<div class="row options-list">
					<div class="col-lg-3 col-md-6 col-xs-6 option-block">
						<img src="/app/images/classe1.png" class="img-circle" />
						<span class="title">Terminale S 3</span>
					</div>
					<div class="col-lg-3 col-md-6 col-xs-6 option-block">
						<img src="/app/images/classe2.png" class="img-circle" />
						<span class="title">1ere ES 1</span>
					</div>
					<div class="col-lg-3 col-md-6 col-xs-6 option-block">
						<img src="/app/images/classe3.png" class="img-circle" />
						<span class="title">1ere S 4</span>
					</div>
					<div class="col-lg-3 col-md-6 col-xs-6 option-block">
						<img src="/app/images/classe4.png" class="img-circle" />
						<span class="title">Terminale ES 1</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="col-md-6">
		<div class="panel panel-evaluation-setting">
			<div class="panel-heading">
				<h3 class="panel-title">Type d'évaluation</h3>
			</div>
			<div class="panel-body">
				<div class="row options-list">
					<div class="col-lg-3 col-md-6 col-xs-6 option-block">
						<img src="/app/images/tp.png" class="img-circle" />
						<span class="title">TP</span>
					</div>
					<div class="col-lg-3 col-md-6 col-xs-6 option-block">
						<img src="/app/images/ds.png" class="img-circle" />
						<span class="title">Devoir surveillé</span>
					</div>
					<div class="col-lg-3 col-md-6 col-xs-6 option-block">
						<img src="/app/images/dm.png" class="img-circle" />
						<span class="title">Devoir maison</span>
					</div>
					<div class="col-lg-3 col-md-6 col-xs-6 option-block">
						<img src="/app/images/cs.png" class="img-circle" />
						<span class="title">Contrôle surpise</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="col-md-6 course-selection">
		<div class="panel panel-evaluation-setting">
			<div class="panel-heading">
				<h3 class="panel-title">Lier à un cours</h3>
			</div>
			<div class="panel-body">
				<div class="row options-list" data-reverse="true">
					<?php
					$datas = [
						['horaire' => '29/02/2016 à 14h05', 'salle' => 'D306'],
						['horaire' => '01/03/2016 à 10h15', 'salle' => 'D304'],
						['horaire' => '02/03/2016 à 08h05', 'salle' => 'L100'],
						['horaire' => '07/03/2016 à 16h05', 'salle' => 'D205'],
					];

					for ($i = 0; $i < 4; $i++): ?>
					<div class="col-md-6">
						<div class="option-block">
							<dl>
								<dt>Horaire</dt>
								<dd><?= $datas[$i]['horaire']; ?></dd>

								<dt>Salle</dt>
								<dd><?= $datas[$i]['salle']; ?></dd>
							</dl>
						</div>
					</div>
					<?php endfor; ?>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6">
		<div class="panel panel-evaluation-setting">
			<div class="panel-heading">
				<h3 class="panel-title">Paramètres</h3>
			</div>
			<div class="panel-body">
				<div class="form-group">
					<label for="description">Description :</label>
					<input type="text" id="description" name="description" class="form-control" />
				</div>
				<div class="form-group">
					<label for="notes-range">Plage des notes :</label>
					<div id="marks-slider">
						<script type="text/javascript">
							var s1 = $("#marks-slider").freshslider({
								range: true,
								step: 5,
								text: true,
								min: -20,
								max: 20,
								unit: '',
								enabled: true,
								value: 10,
								onchange: function (low, high) { }
							});
						</script>
					</div>
				</div>
				<div class="form-group">
					<label for="subject">Sujet :</label>
					<input type="file" id="subject" name="subject" />
				</div>
				<div class="form-group">
					<input type="submit" value="Créer l'évaluation" class="btn btn-primary" />
					<input type="reset" value="Réinitialiser" class="btn btn-default" />
				</div>
			</div>
		</div>
	</div>
</div>
